import db from "./db/conn.mjs";
import bcrypt from 'bcrypt';
import { Strategy as LocalStrategy } from "passport-local";