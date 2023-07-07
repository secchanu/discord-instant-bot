# discord-instant-bot

Discordサーバーをインスタントサーバー(一時的なサーバー)として運用するためのBot

## 使い方

### 必要なもの

- [Node.js](https://nodejs.org/ja/)（LTS版推奨）
- [Git](https://git-scm.com/downloads)

### 準備

#### Bot の作成

[開発者向けポータル](https://discord.com/developers/applications)からアプリケーションを作成  
アプリケーションの設定からBotを選択し、TOKENを取得する  
Privileged Gateway IntentsのSERVER MEMBERS INTENTをオンにしておく

#### プログラムの準備

リポジトリをクローン

```sh
git clone https://github.com/secchanu/discord-instant-bot.git
```

クローンしたディレクトリに移動

```sh
cd discord-instant-bot
```

依存関係のインストール

```sh
npm ci
```

ビルド

```sh
npm run build
```

このREADMEと同じフォルダーの中に以下のような内容の`.env`という名前のファイルを作成

```.env
BOT_TOKEN = ここにDiscordBotのTOKEN
INSTANT_MS = 削除までの時間(ミリ秒)
```

※デフォルトの`INSTANT_MS`は`43200`（12時間）、変更する必要がない場合は`INSTANT_MS`の行は省略可

### 実行

```sh
npm start
```
