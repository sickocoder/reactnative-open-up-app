import { FC } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

import { Box } from '../../components';

const HomeScreen: FC = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <Box flex={1} flexDirection="column" background="red">
      <Text>How your feeling today?</Text>
      <TouchableOpacity
        onPress={() => {
          // presed
        }}
      >
        <Box
          center
          width="200px"
          height="56px"
          marginTop="16px"
          paddingVertical="16px"
          paddingHorizontal="24px"
          background="purple"
        >
          <Text>home screen111</Text>
        </Box>
      </TouchableOpacity>
    </Box>
  </SafeAreaView>
);

export default HomeScreen;
