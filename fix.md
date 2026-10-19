#485 Add an account summary endpoint for one address
Repo Avatar
TricklePay/tricklepay-backend
Summary
A wallet screen wants, for one address, how many streams it is sending and receiving and how much is withdrawable now, without downloading the lists. A GET /accounts/:address/summary endpoint could return those totals using the same derivations as the stream view.

Acceptance criteria
 The endpoint returns incoming and outgoing counts and totals for an address.
 The address is validated and normalised like the list filters.
 Totals are exact strings and the endpoint is tested.
Getting started
Fork this repository, clone your fork, and add this repo as upstream:

git clone https://github.com/<your-username>/tricklepay-backend.git
cd tricklepay-backend
git remote add upstream https://github.com/TricklePay/tricklepay-backend.git
Create a branch for this issue:

git checkout -b feat/issue-485
Suggested commit message:

feat: add an account summary endpoint
Run npm run typecheck, npm test, and npm run build before opening a pull request and linking this issue.