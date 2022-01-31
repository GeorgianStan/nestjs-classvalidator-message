# [Issue Link](https://github.com/nestjs/nest/issues/9055)

## How to replicate

Send a `POST` request to `http://localhost:3000` with a wrong payload, for example `{"pagination":2}`.

The `constraints` variable from `validation-exception.filter.ts` should include the predefiend message from `app.controller.ts` line `18` (`My Message`), but the actual value is `"pagination.My Message"`.
