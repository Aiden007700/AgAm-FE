// @ts-nocheck
import Layout from "../components/Layout";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from "react";
import dynamic from "next/dynamic";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { EditorState, convertToRaw, ContentState } from "draft-js";

const Wysiwyg = dynamic(() =>
  import("react-draft-wysiwyg").then((mod) => mod.Editor)
);

const Editor = () => {
  const [name, setName] = useState<string>("");
  const [typeAlt, setTypeAlt] = useState<string>("Simple");
  const [type, setType] = useState<string>("A");
  const [editorState, setEditorState] = useState<any>(null);
  const submit = () => {
    console.log(JSON.stringify(draftToHtml(convertToRaw(editorState.getCurrentContent()))));
    console.log(name);
    console.log(typeAlt);
    console.log(type);
  };
  return (
    <Layout active="Editor" title="Editor">
      <div class="mb-4">
        <label class="block uppercase tracking-wide text-xs font-bold">
          Title
        </label>
        <input
          class="w-full shadow-inner p-4 border-0"
          type="text"
          name="name"
          placeholder="Procedure Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div class="mb-4">
        <label class="block uppercase tracking-wide text-xs font-bold">
          Procedure Type Simple/Complex
        </label>
        <input
          type="radio"
          name="typeAlt"
          value="Simple"
          id="Simple"
          checked={typeAlt == "Simple"}
          onClick={() => setTypeAlt("Simple")}
        ></input>
        <label for="Simple">Simple</label>
        <br />
        <input
          type="radio"
          name="typeAlt"
          value="Complex"
          id="Complex"
          checked={typeAlt == "Complex"}
          onClick={() => setTypeAlt("Complex")}
        ></input>
        <label for="Complex">Complex</label>
      </div>
      <div class="mb-4">
        <label class="block uppercase tracking-wide text-xs font-bold">
          Procedure Type A/B
        </label>
        <input
          type="radio"
          name="type"
          value="A"
          id="A"
          checked={type == "A"}
          onClick={() => setType("A")}
        ></input>
        <label for="A">A</label>
        <br />
        <input
          type="radio"
          name="type"
          value="B"
          id="B"
          checked={type == "B"}
          onClick={() => setType("B")}
        ></input>
        <label for="B">B</label>
      </div>
      <Wysiwyg
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={setEditorState}
      />
      <hr />
      <button
        className="hover:bg-[#c9c9c9] rounded-full px-2 py-1 mt-3"
        onClick={submit}
      >
        Submit
      </button>
    </Layout>
  );
};

export default Editor;
