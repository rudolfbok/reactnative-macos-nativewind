# React Native macOS Nativewind template

A minimal New Architecture macOS desktop app template with Nativewind, Reanimated and Phosphor Icons.

**Not intended for iOS or Android.**

## Requirements

- macOS
- Xcode
- CocoaPods
- Node.js 20.19.4+
- pnpm 10+

## How to get started

You can choose which package manager you will use, PNPM is default but NPM and Yarn work also

```bash
pnpm install
```

Install the Ruby dependencies and CocoaPods

```bash
ruby -S bundle install
cd macos
ruby -S bundle exec pod install
cd ..
```

From the root start the Metro server

```bash
pnpm start
```

Then start the macOS app

```bash
pnpm macos
```

## Known issues

- CocoaPods installation may fail multiple times due to some problems that are disclosed in the log. Try again and repeat till it installs correctly
