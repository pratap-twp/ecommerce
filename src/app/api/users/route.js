import { NextResponse } from "next/server";
import { readDB, writeDB } from "@/lib/db";

export async function POST(req) {
  const { name, username, password } = await req.json();
  const db = readDB();

  const exists = db.users.find((u) => u.username === username);
  if (exists) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const newUser = {
    id: Date.now(),
    name,
    username,
    password 
  };

  db.users.push(newUser);
  writeDB(db);

  return NextResponse.json({ message: "User registered successfully" });
}
