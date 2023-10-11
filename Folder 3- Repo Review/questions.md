**Question 1**: Where are new users redirected to when they first launch the app?
Amy's Answer: New users (those who are not signed in and don't have an account) are first directed to the AuthNavigator -> SignUpToggle -> SignUp component, where a page is shown asking them to create an account by putting in their email and creating a password. There is also a button on the page, that gives them access to the SignIn page if they already have an account. 

After creating an account successfully, the auth state is changed and an event is triggered that takes them to the AppNavigator component which shows the home screen and climb details.


**Question 2**: What happens to the user's screen upon a successful NFC read?
Upon successful NFC read, the code navigates the user to the Details screen (component in src/Screens/ClimbDetail) where they are shown the climb name and grade.
