# Random Fox!
## A test app for practice the basics about next.js and some typescript with ReactJS and Tailwind.
## Random fox will render random fox images from an api with lazy image load depending on the viewport.

### Notes
For creating a new next.js app use
> npx create-next-app@latest --typescript --use-npm

For running this app (in dev mode) use
> npm run dev

Typescript Configuration
> In tsconfig.json check the following configuration:
```
"strict": true -> Activates some strict checking flags. Needed to be true for "noImplicitAny" to work.
"noImplicitAny": true -> TypeScript will flag any variables or function return types that are not explicitly typed and whose types cannot be inferred. NO MORE type "any" allowed.
"noImplicitReturns": true -> All code paths in functions have a return statement with an appropriate type.
```

ESLint Configuration
> In eslintrc.json check the following configuration (use only for testing in this playground):
```
“rules”:{
"@next/next/no-img-element":“off”,
“jsx-a11y/alt-text”:“off”
}
```

pages/api was deleted since it is not gonna be used here!

This playground includes some typescript special cases like the use of custom types for libraries that doesn't support types. 
