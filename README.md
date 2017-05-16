# ReactNativeSampleChat
A collection of hopefully not-terrible practices to consider when building a React Native app

## The Big Idea

There's plenty of React and React Native tutorials out there that exercise a particular concept or two. I've been looking at a lot of these, and wanted to collect together everything I liked into one project; in this case, something that looks vaguely like a first grader building a social networking client. Consider this part-starter pack, navigation/ MobX/ whatever tutorial, demonstration of folder structure, design patterns, and ES6 constructs. Maybe I'm the only one in the world who has this issue, but sometimes I find it a bit difficult to take all of these little bits and robotically apply them wholistically to a new project without missing something, or at least a bit tedious rebuilding these bits in yet another project after doing something else for the last six months or so. So here it is, standing as either a testament to either my foresight or forgetfulness.

A few notes:
* Most of this stuff I haven't just made up. I try to give credit where it's due.
* This app is intentionally shallow and ugly. I build just enough to demonstrate the concept and precious little more than that.
* I will go into agonizing detail about things you might find trivial (looking at you, Mr. Level 97 React Wizard). This is a reflection of stupid questions I've stumbled on and smart questions asked of me when trying to help others with this stuff.

## Running the Sample

### Prerequisites
* You did all [this stuff](https://facebook.github.io/react-native/docs/getting-started.html) to get React Native working.

### Steps (iOS simulator)
1. Run `npm install`
2. Run `react-native link`
3. Run `react-native run-ios`

### Steps (Android simulator)
I know they're almost the same, but I haven't run this on Android yet (always a bear installing that, like to put it off to the last minute), so let me make sure it works first.

## Concepts

### Project Structure

Credit to [Spencer Carli's Organizing a React Native Project](https://medium.com/the-react-native-log/organizing-a-react-native-project-9514dfadaa0)

Major Points
* Nothing of real consequence in the index.ios.js and index.android.js files. Instead, they point to the real starting point at app/index.js.
* The components/ config/ routes/ layouts structure. I may not be following these exactly, but my interpretation of layouts is that it is for stitching together scenes inside navigation containers, like stacks, and tab bars. Meanwhile, routes are the individual scenes inside of each of those navigation containers (thinking about renaming this to scenes). If this were an iOS storyboard, maybe layouts would be the trunk/ forks in the navigation tree while routes would be branches.
* Breaking up components/ groups of components into separate component, stylesheet, and index files. You can import from the index in a folder simply by referencing the folder (e.g., `../timeline`). This should make it easy to find the styles in effect for a component and limits the refactoring needed to be done when exports change. I don't think the article said one way or the other, but I've decided things are easier if these indexes are made up of non-default exports (so I don't have to worry about whether or not to use curly braces). routes/timeline (used in layouts/main) is the best example of this so far.
* Added my own "stores" folder for MobX stores, similar to what the author does for Redux (more on that later).

Stuff To Do (Better)
* Too much going on in layouts/main. Since the Timeline and Settings can each have their own navigation, I think they ought to have their own layout folders.

### Separating Markup/ Styling/ Logic

Credit to [chantastic's Container Components](https://medium.com/@learnreact/container-components-c0e67432e005), as well as Mr. Carli above.

A big point of React is that separation of concerns in frameworks that keep HTML and JS in separate file isn't the holy grail, because those two "separate" files are tightly-coupled, anyway. Vue.js buffs say React got too much HTML in my JavaScript, upsetting non-JS-savvy designers who wanted to tweak the markup and CSS. It seems like you can have your React and eat it too (mmm... React) if you follow some rules about what kind of JSX goes where, so, even though it's all JavaScript, at least you're not mixing the right and wrong JavaScripts together:
1. Separate the "stylesheets" (which are just JS objects) in their own files.
2. Use common values that are referenced by those indiviual stylesheets (this is what the app/config folder above is for). These are really just glorified constants.
3. Most of your components should have very little or no state. Ideally, a component is just a render() function. Even if you have some branching, if you just have a render function that references some props, is it really all that different from Vue.js or Angular markup extensions? This should make it fairly straightforward for someone to change markup without being burdened by having to pick the markup out of business logic.
4. Building on #3, delay integrating in data sources, like web methods and local stores, until the highest-level component possible. This is the Container pattern. Say we have a UI construct like a social network timeline. Even though a timeline definitely needs data to be useful, we don't put any code about actually fetching the data in the Timeline component itself. We make a Timeline that renders posts based on a prop containing posts. Then we have a TimelineContainer that fetches the data and passes it to the Timeline. I think I did a not-awful job of this in routes/timeline.

Other Details
* The Timeline is using a ListView (which does UITableViewController-like stuff in iOS), which requires some state to be maintained. Some folks argue for bringing in the ListView.DataSource from an outside source, but it feels too ListView-specific for me. Nevertheless, I could still pass in a raw array as a prop that could be "cloned" into the DataSource in state, so it's kind of stateless from the consumer's perspective.

Stuff To Do (Better)
* There's no global styling yet.

### Data/ Services Layer

Credit to [this awesome MobX tutorial](https://mobx.js.org/getting-started.html).

tbd

### Navigation Containers

tbd

### Libraries with Native Linking

tbd

### Unit Testing

tbd

### Other Fun Stuff

tbd
