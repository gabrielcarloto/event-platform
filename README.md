![](https://ik.imagekit.io/698xlahbaqz/Capa_EerBEpvUs.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656940547894)

## :clipboard: About

*Psst: tem em [português](/README-pt.md) também!* :raising_hand_man:

This project was developed during _RocketSeat's Ignite Lab_. The goal was to develop an event platform that fetches data with GraphQL.

### :sparkles: Improvements

- [X] Prevent entry to lessons that are not yet available
  - [X] Remove the link so they cannot be accessed from the sidebar.
  - [X] Redirect to the main page when trying to enter an unavailable class by URL
- [X] Loading screen (skeleton)
- [X] Redirect users that enter `/event` to the first available lesson
- [ ] Responsive design
- [ ] Github authentication
  - [ ] Redirect not logged in users to the login screen 

### :computer: Tecnologias

- [X] Vite
- [X] React
- [X] TailwindCSS
- [X] GraphQL
  - [X] GraphCMS
  - [X] GraphQL Codegen
  - [X] Apollo

## :running: How to run locally

```bash
# Clone the repo
git clone 

# Enter the directory
cd event-platform

# Install the dependencies
pnpm i

# Run
pnpm dev
```