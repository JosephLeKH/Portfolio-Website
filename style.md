Colocation
TLDR:

Place code as close to where it's relevant as possible. — Kent C. Dodds

I encourage you to read his article for a deep dive but I'll provide a quick explanation. Colocation improves maintainability and ease of use as it keeps code in a relevant context. Kent illustrates this point through the ludicrous hypothetical of having a docs/ directory for all of our comments rather than inlining them in the code.

For example, see the following directory trees. The first splits things up by type (i.e., components, hooks). The second colocates relevant files.

Without colocation:

src
├── components
│   ├── course
│   │   ├── CourseCard.tsx
│   │   └── CourseFilters.tsx
│   └── instructor
│       ├── InstructorCard.tsx
│       └── InstructorFilters.tsx
├── hooks
│   ├── useCourseFilters.ts
│   └── useInstructorFilters.ts
├── images
│   ├── course-search.gif
│   └── instructor-search.gif
└── routes
    ├── CourseSearchResults.tsx
    └── InstructorSearchResults.tsx
With colocation:

src
└── routes
    ├── CourseSearchResults
    │   ├── CourseCard.tsx
    │   ├── CourseFilters.tsx
    │   ├── course-search.gif
    │   ├── useCourseFilters.ts
    │   └── index.tsx
    └── InstructorSearchResults
        ├── InstructorCard.tsx
        ├── InstructorFilters.tsx
        ├── instructor-search.gif
        ├── useInstructorFilters.ts
        └── index.tsx
Navigating the second is much easier. Imagine having to jump between several different directories just to find what you're looking for. Moreover, what if we no longer need the InstructorSearchResults view? Without colocation, we'd likely leave unused code around, whereas with colocation we easily delete a single directory.

So what does colocation look like in practice? We have a single routes directory that contains a subdirectory for each route (or view). These route directories contain all the relevant code and assets.

Note: there are exceptions to this pattern. For us the main one is that we separate out the api layer. Rather than collocating single use endpoints with the component that uses them, we keep all the apis together as an isolated data layer.

Clean interfaces
We strive to write clean and strict interfaces for our components, functions, and hooks in order keep our code maintainable. Clean interfaces allow keep code decoupled from its implementation. We will look at this in depth when we talk about cui as it provides a great example for interface design.

Readability
We optimize for readability to help us achieve our goals.

There are four important patterns that help us write readable code:

Newspaper code
Use of const not let
Return early pattern
Named arguments with object parameters
Newspaper code
We want our future self and other contributors to be able to quickly understand the high level details upfront. Newspaper code does exactly that (hence the name).

Consider the following example.

Before:

export const CuiButton: FunctionComponent<Props> = ({ /** removed for brevity */ }) => {
  const extraAsProps =
    as === 'button'
      ? {
          type: 'button',
        }
      : as === 'a'
      ? getSafeExternalLinkProps({ href: (asProps as any).href })
      : {}

  return (
    <CuiButtonRoot
      // ... removed for brevity ...
      {...extraAsProps()}
    >
      {children}
    </CuiButtonRoot>
  )
}
After:

export const CuiButton: FunctionComponent<Props> = ({ /** removed for brevity */ }) => {
  const extraAsProps = getExtraAsProps()

  return (
    <CuiButtonRoot
      // ... removed for brevity ...
      {...extraAsProps()}
    >
      {children}
    </CuiButtonRoot>
  )

  /**
   * We can put the function definition after the return statement because it gets hoisted.
   */
  function getExtraAsProps() {
    if (as === 'button') {
      return {
        type: 'button',
      }
    }

    if (as === 'a') {
      return getSafeExternalLinkProps({ href: (asProps as any).href })
    }

    return {}
  }
}
In the first snippet, we clutter the component body with the extraAsProps logic, which makes it harder for the the reader to understand what's going on at a high level. With newspaper code structure we remove all the logic from the component body and provide just the "headline": const extraAsProps = getExtraAsProps(). The details come beneath the return statement so they are out of the way. Additionally, we benefit from encapsulating the logic into a single function. And we get the benefit of being able to use early returns instead of a nested ternary (which we lint against).

The above example is quite simple with a single variable. The benefits become even more clean when we start to have many variables:

const Foo = () => {
  const a = getA()
  const b = getB()
  const c = getC()

  return (
    <Fragment>
      {a} {b} {c}
    </Fragment>
  )

  function getA() {
    // ... long function body ...
  }

  function getB() {
    // ... long function body ...
  }

  function getC() {
    // ... long function body ...
  }
}
Use of const not let
The difference between const and let is that when using let, a variable can be reassigned later. let makes it harder on the reader because they can't tell when and why a variable may change upon a first glance. Additionally, forcing ourselves to use const often results in writing better code. I encourage you to read Let’s use const! Here’s why.

Consider the following example.

Before:

const CuiSatisfaction: FunctionComponent<Props> = ({ value }) => {
  let iconType = 'face-sad'

  if (value >= 33) {
    iconType = 'face-neutral'
  }

  // some random code

  // some more random code

  if (value >= 66) {
    // whatcha doing reassigning `iconType` down here?
    iconType = 'face-happy'
  }

  return <CuiIcon iconType={iconType} />
}
After:

const CuiSatisfaction: FunctionComponent<Props> = ({ value }) => {
  const iconType = getIconType()

  return <CuiIcon iconType={iconType} />

  function getIconType() {
    if (value >= 66) {
      return 'face-happy'
    }

    if (value >= 33) {
      return 'face-neutral'
    }

    return 'face-sad'
  }
}
In the first snippet, the reader has to parse through a bunch of random code in order to see that iconType is eventually reassigned. The second snippet shows how using const along with newspaper code makes it easier for the reader because they immediately know that iconType is whatever gets returned from getIconType and will never be reassigned.

Return early pattern
The return early pattern helps us avoid complicated if/else blocks and nested conditionals. Rather than using conditionals to test for the happy path, we use guard clauses and fail early.

... TODO ADD EXAMPLE...

Named arguments with object parameters
By having our functions take a single object parameter, we get named parameters, which improve readability, allow for arbitrary ordering, and allow us to have optional arguments with defaults. Check out this article for more.