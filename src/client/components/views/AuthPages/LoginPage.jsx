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
function LoginPage() {
    const [email, setEmail] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const [errorMessage, setErrorMessage] = (0, react_1.useState)(undefined);
    let navigate = (0, react_router_dom_1.useNavigate)();
    const login = () => __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield (0, auth_1.signInWithEmailAndPassword)(firebase_config_1.auth, email, password);
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/");
        }
        catch (error) {
            setErrorMessage(error.message);
        }
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        login();
    };
    return (<main className="authPages">
      <div className="content">
        <h3>LOGIN</h3>
        <form onSubmit={() => handleSubmit}>
          <input placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
          {(errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.includes("user-not-found")) && (<p className="errorMessage">User not registered</p>)}
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
          {(errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.includes("wrong")) && (<p className="errorMessage">Email or password are invalid.</p>)}
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <a href="/register">Register now.</a>
        </p>
      </div>
    </main>);
}
exports.default = LoginPage;
