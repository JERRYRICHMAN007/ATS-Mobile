import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack ScreenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(screens)" options={{ headerShown: false }} />
    </Stack>
  );
}
