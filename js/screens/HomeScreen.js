import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Trans, t } from '@lingui/macro';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.somethingContainer}>
        <Text>Something</Text>
        <Text style={styles.somethingTitle}>
          <Trans>Translate this</Trans>
        </Text>
        <Button title={t`Button title`} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: 'lightgrey',
  },
  welcomeContainer: {
    alignItems: 'center',
    height: 260,
  },
  welcomeImage: {
    width: '80%',
    height: '95%',
    resizeMode: 'contain',
    marginTop: 10,
  },
  somethingContainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginHorizontal: 30,
    marginVertical: 20,
    borderLeftWidth: 1,
    borderColor: 'lightgrey',
  },
  somethingTitle: {
    color: 'black',
    fontSize: 20,
    marginLeft: 5,
  },
});
