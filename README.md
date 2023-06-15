# [Frontend] News Browser Challenge

## Approach

The application allows users to view the latest news articles, filter results by search keywords, maintain a list of favorite articles, and track the read articles. The challenge was approached by breaking down the functionality into separate components and managing the state using React hooks.

The key components of the application include:

- `App`: The main component that fetches the articles, manages the state, and renders the other components.
- `ArticleCard`: Renders article and handles actions like adding/removing favorites and marking article as read.
- `FavoritesList`: Renders the list of favorite articles.
- `FilterInput`: Renders the input field used for filtering the articles based on search keywords.

## Implementation Tradeoffs

- **UI Framework**: The application was built using React, which provides a component-based architecture for better code organization and reusability.
- **CICD System**: The current implementation of the CICD system encounters limitations due to changes in the liberties of the free developer keys on newapi.org since May 22, 2020. Any request using the free key, not originating from localhost, is now rejected. To overcome this constraint, it is necessary to acquire one of the keys specifically designed for production projects, which requires a purchase.
- **Styling and Third-Party Libraries**: Basic CSS styles were applied to create a visually appealing and user-friendly interface. For more complex styling needs, a CSS preprocessor or a UI component library (like Material-UI, Ant Design, React Bootstrap) can be considered. Using a library like Material-UI could enhance the user experience and provide pre-built UI components for faster development
- **Responsiveness**: The application was not optimized for responsiveness in this implementation. Additional CSS media queries and layout adjustments could be made to ensure a better user experience across different screen sizes.
- **Layout**: One tradeoff is the decision to display news articles in a single column layout. Implementing a two-column layout could enhance the visual presentation and optimize screen space usage, but it would require additional CSS and layout adjustments for responsiveness and readability.
- **Error Handling**: Error handling for API requests and user input validation was not extensively implemented in this version. Proper error messages and fallback UI could be added to improve the robustness of the application.
- **Filtering Interaction**: Filtering functionality is triggered by clicking the "Search" button, rather than dynamically updating as the user types. While the current approach simplifies the implementation, it may result in a less seamless user experience. Implementing real-time filtering, where the articles are updated as the user types, would require additional logic and event handling to handle the input changes efficiently.

## Future Enhancements

Here are some potential enhancements that could be considered for further development:

- **Pagination**: Implementing pagination to load and display a limited number of articles at a time could improve performance and user experience, especially when dealing with a large number of articles.
- **Category Filters**: Adding filters for different news categories (e.g., game industry, politics, sports) would allow users to browse articles based on their interests.
- **User Authentication**: Implementing user authentication and user-specific features like personalized favorites, history, and saved searches would enhance the application's functionality.
- **Social Sharing**: Adding social sharing functionality to allow users to share interesting articles with others through popular social media platforms or email.
- **Notification System**: Implementing a notification system to notify users about new articles, trending topics, or personalized recommendations can enhance user engagement and retention.
- **Improved Search**: Enhancing the search functionality with more advanced features like auto-suggestions, search history, or advanced search options (e.g., filtering by date range) would make the application more powerful and user-friendly.

## Testing Instructions

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/<your-username>/news-browser.git`
2. Navigate to the project directory: `cd news-browser`
3. Install the dependencies: `npm install`
4. Obtain an API key from [NewsAPI](https://newsapi.org/) and replace `"YOUR_API_KEY"` in the API URL with your actual API key in the following file: `src/App.js`
5. Start the development server: `npm start`
6. Open your browser and access the application at `http://localhost:3000`

Make sure you have Node.js and npm installed on your machine before running the above commands.

Feel free to reach out to me at sqa.artur@gmail.com if you have any questions or need further assistance.
