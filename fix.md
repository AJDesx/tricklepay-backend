#483 Add a kind filter to the stream events endpoint
Repo Avatar
TricklePay/tricklepay-backend
Summary
GET /streams/:id/events returns every indexed event for a stream. A client that only wants withdrawals, to total payouts for example, must filter locally. A kind parameter accepting created, withdrawn or cancelled is a small database filter.

Acceptance criteria
 A kind parameter filters the events.
 An unknown kind returns a 400.
 The OpenAPI document and tests cover it.
Getting started
Fork this repository, clone your fork, and add this repo as upstream:

git clone https://github.com/<your-username>/tricklepay-backend.git
cd tricklepay-backend
git remote add upstream https://github.com/TricklePay/tricklepay-backend.git
Create a branch for this issue:

git checkout -b feat/issue-483
Suggested commit message:

feat: add a kind filter to the events endpoint
Run npm run typecheck, npm test, and npm run build before opening a pull request and linking this issue.