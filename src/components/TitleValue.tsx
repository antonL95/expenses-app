import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Text, useTheme} from '@rneui/themed';
import {makeStyles} from '@rneui/themed';
import {Skeleton} from '@rneui/themed';

interface ServerResponse {
    value: string;
}

type Props = {
    fullWidth?: boolean;
};

const useStyles = makeStyles((theme, props: Props) => ({
    container: {
        background: theme.colors.primary,
        width: props.fullWidth ? '100%' : 'auto',
    },
    text: {
        color: theme.colors.primary,
        fontSize: 32, // Equivalent to H1 font-size on the web
        fontWeight: 'bold',
        marginBottom: 16, // Some spacing below the text
    },
    skeleton: {
        width: 120,
        height: 40,
        backgroundColor: theme.colors.grey4,
    },
    fonts: {
        marginBottom: 8,
    },
    cardTitle: {
        color: theme.colors.primary,
        fontSize: 32,
    }
}));

function TitleValue(
    props: Props = {
        fullWidth: true,
    },
) {
    const [data, setData] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    const theme = useTheme();
    const styles = useStyles(props);

    /* useEffect(() => {
         // Replace with your server URL
         const serverURL = 'https://your-server-url.com/data-endpoint';

         fetch(serverURL)
         .then((response) => response.json())
         .then((data: ServerResponse) => {
             setData(data.value);
             setLoading(false);
         })
         .catch((error: Error) => {
             setError(error);
             setLoading(false);
         });
     }, []);*/

    if (loading) {
        return <View style={styles.container}>
            <Skeleton style={styles.skeleton} width={120} height={40}/>
        </View>;
    }
    if (error) {
        return <View style={styles.container}>
            <Text style={styles.text}>Error: {error.message}</Text>
        </View>;
    }

    return (
        <View style={styles.container}>
            <Card containerStyle={{ marginTop: 15 }}>
            <Card.Title style={styles.cardTitle}>Net worth</Card.Title>
            <Card.Divider />
            <Text style={styles.fonts}>{data}</Text>
        </Card>
        </View>
    );
}

const styles = StyleSheet.create({});

export default TitleValue;
