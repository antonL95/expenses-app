import AppNavigator from "./src/navigation/AppNavigator";
import {createTheme, ThemeProvider} from '@rneui/themed';

const darkTheme = {
    colors: {},
};

const theme = createTheme({
    darkColors: {
        primary: '#1E88E5', // A deep blue for primary actions and buttons
        secondary: '#7E57C2', // A secondary color for other elements, maybe a deep purple
        grey0: '#212121', // Darkest gray for backgrounds
        grey1: '#424242', // Dark gray for secondary text and borders
        grey2: '#616161', // Medium gray for icons and tertiary text
        grey3: '#757575', // Light gray for disabled elements
        grey4: '#9E9E9E', // Lighter gray for placeholders
        grey5: '#BDBDBD', // Even lighter gray, can be used for borders or dividers
        greyOutline: '#BDBDBD', // For outlines
        searchBg: '#424242', // Background color for search bars
        success: '#43A047', // Green for success messages or icons
        error: '#E53935', // Red for errors
        warning: '#FBC02D', // Yellow for warnings
        divider: '#757575', // For dividers or borders
        platform: {
            ios: {
                primary: '#1E88E5',
                secondary: '#7E57C2',
                success: '#43A047',
                error: '#E53935',
                warning: '#FBC02D',
            },
            android: {
                primary: '#1E88E5',
                secondary: '#7E57C2',
                success: '#43A047',
                error: '#E53935',
                warning: '#FBC02D',
            },
        },
    },
    mode: 'dark',
});


export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <AppNavigator/>
        </ThemeProvider>
    )
}
