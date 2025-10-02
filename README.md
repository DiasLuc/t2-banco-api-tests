# T2 Banco API Tests

This project contains the automated **REST API tests** for the backend application [Banco API](https://github.com/DiasLucP/banco-api).  
It was built to ensure the reliability, consistency, and correctness of the API’s endpoints using modern JavaScript testing tools.

---

## 🎯 Objective

The goal of this project is to validate the behavior of the Banco API by automating integration tests for its REST endpoints.  
It provides a fast, reproducible, and maintainable way to verify that the API functions as expected.

---

## 🛠️ Tech Stack

- [Node.js](https://nodejs.org/) – JavaScript runtime
- [Mocha](https://mochajs.org/) – Test runner
- [Chai](https://www.chaijs.com/) – Assertion library
- [Supertest](https://www.npmjs.com/package/supertest) – HTTP assertions
- [Mochawesome](https://www.npmjs.com/package/mochawesome) – Test reporting

---

## 📂 Project Structure

```
t2-banco-api-tests/
├── test/                       # Test cases
│   ├── login.test.js           # Tests for Login routes
│   ├── transferencias.test.js  # Tests for Transferencias routes
│   └── ...                     # Other endpoint test files
├── mochawesome-report/         # Generated HTML reports (after running tests)
├── .env                        # Environment variables (ignored by git)
├── package.json                # Project dependencies and scripts
└── README.md                   # Project documentation
```

---

## ⚙️ Environment Configuration

This project requires a `.env` file in the root folder with the following format:

```
BASE_URL=http://localhost:3000
```

- `BASE_URL`: Base URL of the API under test (adjust according to your backend server).

---

## ▶️ Running the Tests

1. **Install dependencies:**

```bash
npm install
```

2. **Run tests:**

```bash
npm test
```

3. **Generate and view HTML reports (Mochawesome):**

After running the tests, the report will be available in:

```
mochawesome-report/mochawesome.html
```

You can open it in any browser.

---

## 📖 Useful Documentation

- [Mocha Documentation](https://mochajs.org/)
- [Chai Documentation](https://www.chaijs.com/)
- [Supertest Documentation](https://www.npmjs.com/package/supertest)
- [Mochawesome Documentation](https://www.npmjs.com/package/mochawesome)

---

## 🔗 Related Projects

- [Banco API (backend under test)](https://github.com/DiasLucP/banco-api)
