import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "expo-router";
import { Button, Platform, StyleSheet } from 'react-native';


export default function TabTwoScreen() {
  const { user, logout } = useAuth();
  const router = useRouter();

 function handleLogout() {
    logout();                 
    router.replace("/login"); 
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Perfil
        </ThemedText>
      </ThemedView>
      <ThemedText>Nome: {user?.name}</ThemedText>
      <ThemedText>Email: {user?.email}</ThemedText>
      <ThemedView style={styles.stepContainer}>
        <Button title="Sair" onPress={handleLogout} />
      </ThemedView>
      
        
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
            
          ),
          
          
        })}
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  stepContainer: {
    width: 140,
    alignSelf: 'flex-start',
    gap: 8,
    marginBottom: 8,
  },
});
