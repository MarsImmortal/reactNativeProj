
import { Fontisto } from '@expo/vector-icons';
import {
  StyleSheet, SafeAreaView, View, Text, Appearance
} from 'react-native';
import { Link } from 'expo-router';

import { Colors } from '@/constants/Colors';

export default function ContactScreen() {
  const colorScheme = Appearance.getColorScheme();

  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const imgColor = colorScheme === 'dark' ? 'papayawhip' : '#333';

  const styles = createStyles(theme, colorScheme);

  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.imgContainer}>
        <Fontisto
          name="coffeescript"
          size={250}
          color={imgColor}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>Indian Tiffin Service</Text>

        <View style={styles.textView}>
          <Text style={styles.text}>
            <Text>RiversDale rd.,</Text>{'\n'}
            <Text>Boxhill south, VIC-3125</Text>
          </Text>
        </View>

        <View style={styles.textView}>
          <Text style={styles.text}>
            Phone:{'\n'}
            <Link href="tel:0451293198" style={styles.link}>0451-293-198</Link>{'\n'}
            or{' '}
            <Link href="sms:0451293198" style={styles.link}>Click Here to Text!</Link>{'\n'}
            or{' '}
            <Link href='email:sakshambehal8@gmail.com' style = {styles.link}>Click here to mail!</Link>{'\n'}
          </Text>
        </View>

        <View style={styles.textView}>
          <Text style={styles.text}>
            Hours:{'\n'}
            <Text>Open 6am to 4pm daily.</Text>{'\n'}
          </Text>
        </View>

      </View>

    </SafeAreaView>
  );
}

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      paddingTop: 0,
      flexGrow: 1
    },
    imgContainer: {
      backgroundColor: colorScheme === 'dark' ? '#353636' : '#D0D0D0',
      height: 250,
    },
    textContainer: {
      backgroundColor: theme.background,
      padding: 12,
    },
    title: {
      color: theme.text,
      fontSize: 24,
      fontWeight: 'bold',
      lineHeight: 32,
      marginBottom: 10,
    },
    textView: {
      marginBottom: 10,
    },
    text: {
      color: theme.text,
      fontSize: 16,
      lineHeight: 24,
    },
    link: {
      textDecorationLine: 'underline',
    }
  });
}