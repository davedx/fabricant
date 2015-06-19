# Fabricant

A tiny library for doing ES6 Unity3D-style object oriented composition.

Currently there are a lot of approaches to merging behaviours of objects in JavaScript. The original, prototypal inheritance, is very
flexible but error prone and has too much boilerplate. ES6 provides a basic foundation for more concise object oriented programming
in JavaScript with the addition of the class and extends keywords, but many people [who?] argue composition is a better road to
behaviour reusability than inheritance.

Facebook made a strong case for composition when they introduced React, using Mixins to "mix behaviour in" to class components. However,
ES6 is not compatible with this approach, so they are now looking at approaches such as functional composition (or "higher order components").[1]

This approach is nice, but I *personally* find the Unity3D approach (I've also seen this used in a AAA studio I worked for in a C++ code base) more readable, and also more complementary to object oriented code.

Therefore I have written this very simple library to "fabricate" objects from prefabs that define which components they need. All of the code
defining the behaviour of the "thing" you are implementing should be in the components; the "host" object is simply a container for the components. This keeps composition very clean; the only way to build behaviour is by mixing different components together. There is no extra
code in the host object itself, like there is in a React component.

[1] https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750


