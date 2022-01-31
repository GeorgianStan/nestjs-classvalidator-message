# [Issue Link](https://github.com/nestjs/nest/issues/9055)

## How to replicate

1. `npm ci`
2. `npm run start:dev`
3. Send a `POST` request to `http://localhost:3000` with a wrong payload, for example `{"pagination":2}`.

   **The correct response should be `["My Message"]`**

   _The `constraints` variable from `validation-exception.filter.ts` should include the predefiend message from `app.controller.ts` line `18` (`My Message`), but the actual value is `"pagination.My Message"`._
