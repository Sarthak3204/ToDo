# ToDo

# Lifting State

It referes to the process of mving stae up to the closest common ancestor of the components what need to access or modify that state

# Colocating State

It mean placing state as close as possible to where it is used.

# useEffect and useLayoutEffect

useEffect runs after the render phase and after the paint and it is done asynchronously
useLayoutEffect runs after the render phase but before the paint and it is done synchronously

# useRef

It allows direct access to DOM elements without triggering re-renders
Can be used to store previous value which could be useful for comparison

# LifeCycle

3 phase Mout Update and Demount
Mount: Run Lazy Initializers

Update: Render, React updates DOM, Cleanup LayoutEffect, Run LayoutEffect, Browser paints screen, Cleanup Effect, Run Effects

Demount:
