#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <NaverThirdPartyLogin/NaverThirdPartyLoginConnection.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"CardForYou";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

// NaverLogin URL 핸들링이 필요없을 때,
- (BOOL)application:(UIApplication *)application
            openURL:(NSURL *)url
            options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
   return [[NaverThirdPartyLoginConnection getSharedInstance] application:app openURL:url options:options];
}

// NaverLogin URL 핸들링이 필요할 때,
// - (BOOL)application:(UIApplication *)application
//             openURL:(NSURL *)url
//             options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
//   // naver
//   if ([url.scheme isEqualToString:@"{{ CUSTOM URL SCHEME }}"]) {
//     return [[NaverThirdPartyLoginConnection getSharedInstance] application:app openURL:url options:options];
//   }
  
//   // kakao
//   if([RNKakaoLogins isKakaoTalkLoginUrl:url]) {
//     return [RNKakaoLogins handleOpenUrl: url];
//   }
// }

@end
