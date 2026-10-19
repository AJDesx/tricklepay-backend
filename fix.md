#484 Add a tokens endpoint listing distinct tokens with stream counts
Repo Avatar
TricklePay/tricklepay-backend
Summary
A client building a token picker or per-token totals has to page through every stream to discover which tokens exist. A GET /tokens endpoint returning each distinct token with its stream count and total escrowed amount answers it in one query.

Acceptance criteria
 The endpoint returns each distinct token with a count and total.
 Amounts are strings and exact.
 It appears in the OpenAPI document with a test.
Getting started
Fork this repository, clone your fork, and add this repo as upstream:

git clone https://github.com/<your-username>/tricklepay-backend.git
cd tricklepay-backend
git remote add upstream https://github.com/TricklePay/tricklepay-backend.git
Create a branch for this issue:

git checkout -b feat/issue-484
Suggested commit message:

feat: add a tokens endpoint
Run npm run typecheck, npm test, and npm run build before opening a pull request and linking this issue.