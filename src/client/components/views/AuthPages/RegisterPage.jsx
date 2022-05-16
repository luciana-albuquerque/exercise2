"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./authPages.scss");
const auth_1 = require("firebase/auth");
const firebase_config_1 = require("../../../../firebase-config");
const react_router_dom_1 = require("react-router-dom");
function RegisterPage() {
    const [email, setEmail] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const [confirmPassword, setConfirmPassword] = (0, react_1.useState)("");
    const [emailErr, setEmailErr] = (0, react_1.useState)(false);
    const [pwdError, setPwdError] = (0, react_1.useState)(false);
    const [confirmPwdError, setConfirmPwdError] = (0, react_1.useState)(false);
    const [errorMessage, setErrorMessage] = (0, react_1.useState)("");
    let navigate = (0, react_router_dom_1.useNavigate)();
    const emailRgx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const pwdRgx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const validate = () => {
        const emailVal = emailRgx.test(email);
        const pwdVal = pwdRgx.test(password);
        const confirmPwdVal = confirmPassword === password;
        setEmailErr(!emailVal);
        setPwdError(!pwdVal);
        setConfirmPwdError(!confirmPwdVal);
        return !emailVal || !pwdVal || !confirmPwdVal;
    };
    const register = () => __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield (0, auth_1.createUserWithEmailAndPassword)(firebase_config_1.auth, email, password);
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/");
        }
        catch (error) {
            setErrorMessage(error.message);
        }
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            return;
        }
        register();
    };
    return (<main className="authPages">
      <div className="content">
        <h3>REGISTER</h3>
        <form onSubmit={() => handleSubmit}>
          <input placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
          <input type="password" placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)}/>
          {emailErr && <p className="errorMessage">Your email is invalid</p>}
          {pwdError && <p className="errorMessage">Your password is invalid</p>}
          {confirmPwdError && (<p className="errorMessage">Passwords do not match.</p>)}
          {(errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.includes("already-in-use")) && (<p className="errorMessage">Email already registered.</p>)}
          <button type="submit">Create Account</button>
        </form>
        <p>
          Already have an account? <a href="/login">Sign in here.</a>
        </p>
      </div>
    </main>);
}
exports.default = RegisterPage;
