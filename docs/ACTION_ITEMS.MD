# ReactJS take-home test

Create a micro-CMS system for a personal use blog using React JS and local storage.

## Assessment Key parts

- This is a SPA therefore we need a router to set up the blog pages.
- No authentication is required.
- I will follow atomic design principles for components creation
- I can use static media files.
- Hero image.
- CRUD operations for the blog posts.
- Search capabilities with auto-completion.
- No WYSIWYG required.
- Local storage.
- Not mentioned but I will add unit testing.
- I won't include pagination, filters, or infinite scroll for the posts.

## Sections or pages for the blog

- Home
- About
- Blog (will display the whole list of posts, creation will be displayed here)
- Post detail (edit will be displayed here)
- Contact

## Action items

### Project setup

- [x] Set up the project with all the things that I need (eslint, prettier, lint-staged, husky, tailwind).
- [x] Set up the router with the pages described above.
- [x] Set up the state of the application with context and reducer hooks.

### UI tasks

- [x] Create the layout of the page.
  - [x] Create the logo component
  - [x] Create the navigation bar component.
    - [x] Create the search bar.
  - [x] Create the footer component.
  - [x] Create the content component.
- [x] Create the 404 page.
- [ ] Create the home page.
  - [x] Create the hero image.
  - [ ] Create a section with videos from youtube.
  - [ ] Create a section for the latest post.
- [x] Create an about page with fake data.
- [x] Create a contact page with a simple form (only visual).
- [x] Create the blog
  - [x] Create the card for the posts should contain: the title, abstract of the content, creation date, image,and delete button.
  - [x] Create the form to create a post (will be rendered in the list of posts with a button).
- [x] Details of a post
  - [x] Create the details page of a post.
  - [x] Create the form to update the post.

### Functionality tasks

- [x] Create the models (interfaces and types) for the application data.
- [x] Implement the logic create a post.
- [x] Implement the logic to delete a post.
- [x] Implement the logic to update a post.
- [x] Implement the search functionality with the autocomplete feature.
- [ ] Setup the local storage and populate the state of the application.
