#486 Add HEAD support for the stream detail route
Repo Avatar
TricklePay/tricklepay-backend
Summary
Clients and caches that only want to know whether a stream exists or has changed cannot use HEAD /streams/:id; the route answers only GET. Supporting HEAD with the same status codes and headers (including the ETag) avoids transferring the body.

Acceptance criteria
 HEAD /streams/:id returns the same status and headers as GET without a body.
 An unknown id returns 404.
 A test covers both.
Getting started
Fork this repository, clone your fork, and add this repo as upstream:

git clone https://github.com/<your-username>/tricklepay-backend.git
cd tricklepay-backend
git remote add upstream https://github.com/TricklePay/tricklepay-backend.git
Create a branch for this issue:

<<<<<<< HEAD
git checkout -b feat/issue-485
Suggested commit message:

feat: add an account summary endpoint
Run npm run typecheck, npm test, and npm run build before opening a pull request and linking this issue.
=======
git checkout -b feat/issue-486
Suggested commit message:

feat: support HEAD on the stream detail route
Run npm run typecheck, npm test, and npm run build before opening a pull request and linking this issue.


>>>>>>> ab522ad (feat: support HEAD on the stream detail route)
