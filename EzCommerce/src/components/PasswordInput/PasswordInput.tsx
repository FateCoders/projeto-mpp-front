import React, { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

interface Props {
  label: React.ReactNode;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PasswordInput({ label, name, value, onChange }: Props) {
  const [show, setShow] = useState(false);
  return (
    <Form.Group className="mb-3" controlId={name}>
      <Form.Label>{label}</Form.Label>
      <InputGroup>
        <Form.Control
          type={show ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          placeholder="Digite sua senha"
          required
        />
        <Button
          variant="outline-secondary"
          onClick={() => setShow(!show)}
          type="button"
        >
          <i className={`bi ${show ? "bi-eye-slash" : "bi-eye"}`}></i>
        </Button>
      </InputGroup>
    </Form.Group>
  );
}
