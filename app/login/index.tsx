import { useAuth } from "@/hooks/useAuth";
import { Button, View, Text } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();

  function handleLogin() {
    login("carlos@seila");
    router.replace("/(tabs)"); 
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem-vindo ao App Profissional</Text>
      <Button title="Entrar no Sistema" onPress={handleLogin} />
    </View>
  );
}