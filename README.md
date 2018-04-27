This project was a semester long project for the Software Engineering course (CS 439/539) taught at Yale University.
The project is a mobile application for a tourist/tour guide service that aims to connect travelers to local, amateur tour guides.
The authors of this project are @james-miller-93 and @roula32

This project was built in the React Native framework using Create-React-Native-App.

The code is divided into "screens" and "components". The screens are comprised of the various components. Data is transferred between screens via the React Redux store. The "reducers" folder contains the data objects comprising the store. Data is sent to the store via functions seen in the "actions" folder. Backend communication is handled with Redux Saga (see "config/sagas"). 
