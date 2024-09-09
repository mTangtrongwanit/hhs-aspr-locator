# artisanal-react readme

vague thoughts on organizing global styles

## utility classes & css reset

I try to keep my 'actual' global stylesheet `index.css` as small as possible.

### avoiding "tailwindification" of jsx

IMHO, writing super-modular, class-based CSS (ex. `.bold .green .underline`) has a few disadvantages. My main frustration is that it bogs down your html/jsx, making it slower to scan through visually. It starts to look as ugly and verbose as writing all of your styles inline.

In addition, when you have to write a styled component for an element anyway, sprinkling global classes like these on top increases your likelihood of getting...

### css priority conflicts (hiss)

aka, unintentionally setting the same property on the same element through multiple different selectors. You can waste a lot of time just diagnosing these bugs, and determining / forcing priority in CSS gets really detail-oriented. I try to just avoid it all together where I can by writing more precise selectors, and limiting the number of different files that I need to search through to find code affecting any given element.

### shouldn't all the `<h3>` tags in an app have the same styles? can't you save some time by just making that a global selector?

Not necessarily! Just because two headings are on the same level of the visual design hierarchy, doesn't mean they should be the same HTML tag. Sometimes, we need to add screenreader-only headings to containers where a visual heading isn't necessary. That means a heading inside a container might need to be an `<h4>`, whereas the visually identical heading outside that container should be an `<h3>`.

### well then, sounds like a good use case for a global class instead

Yeah... In practice, I feel like this more often than not backs me into a corner and takes longer. For example, let's say we think this is a safe global rule:

```
.heading-level-2 {
    margin-left: 1rem;
}
```

That probably works in most situations, but it might cause an issue here:

```
<container that has 1rem padding-left>
    <heading-level-2> oh no now i am double indented </heading-level-2>
</container>
```

I like to reserve the right to choose sizing, positioning, and layout values situationally to avoid situations like this. That only really leaves decorative properties being duplicated between selectors every time. I try to keep a single source of truth for those properties with global CSS variables anyway, so it doesn't feel like a huge inefficiency or opportunity for 'design system leaking' to just duplicate those properties in different selectors. YMMV!

## picking size variable & breakpoint values

This is one place where I'm a little more intuitive than methodological. I'll usually start with all the size var and breakpoint values that I used in my previous project. For sizes, I'll change the values to either better match the intent of the original design, or to achieve a different look in the visual hierarchy. For breakpoints, I'll adjust them or add more just based on _where the design starts to look bad_.
