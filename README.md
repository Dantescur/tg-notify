````md
# Tg-notify

Telegram Bot Sender is a simple npm package that allows you to send messages to a Telegram channel using a bot.

## Installation

To install Telegram Bot Sender, run the following command:

```sh
npm install tg-notify
```
````

## Usage

To use Telegram Bot Sender, you need to have a Telegram bot token and a channel ID. You can obtain them by following the [official documentation](^1^).

Then, you can import the package and call the `sendMessage` function with the message text as an argument:

```js
import sendMessage from "tg-notify";

sendMessage("Hello, world!");
```

The function will return a promise that resolves if the message was sent successfully, or rejects if there was an error.

## Features

Telegram Bot Sender has the following features:

- It uses [axios](^2^) to make HTTP requests to the Telegram API
- It uses [dotenv](^3^) to load environment variables from a `.env` file
- It validates the message text and throws an error if it is empty
- It logs the result of the message sending to the console

## License

Telegram Bot Sender is licensed under the [MIT License](^4^).

## Contributing

Contributions are welcome. Please fork the [repository](^5^) and submit a pull request.

## Contact

If you have any questions or feedback, please contact me at example@example.com.

## Acknowledgements

- Thanks to [Telegram] for providing the bot platform and API

```

```
