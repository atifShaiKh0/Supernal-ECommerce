// "use client";

// // Import dynamic from Next.js
// import dynamic from "next/dynamic";
// import { useState, useEffect } from "react";
// import "react-quill/dist/quill.snow.css";

// // Dynamically import react-quill to prevent SSR issues
// const ReactQuill = dynamic(import("react-quill"), {
//   ssr: false,
//   loading: () => <p className="bg-black border-red-950">Loading ...</p>,
// });
// // const QuillNoSSRWrapper = dynamic(import("react-quill"), {
// //   ssr: false,
// //   loading: () => <p>Loading ...</p>,
// // });

// const modules = {
//   toolbar: {
//     container: [
//       [{ header: [1, 2, false] }],
//       ["bold", "italic", "underline", "strike", "blockquote"],
//       [{ size: ["extra-small", "small", "medium", "large"] }],
//       [{ list: "ordered" }, { list: "bullet" }],
//       ["link"],
//       [{ color: [] }, { background: [] }],
//       ["clean"],
//     ],
//   },
// };

// export default function Description({ data, handleData }) {
//   const handleChange = (value) => {
//     handleData("description", value);
//   };
//   return (
//     <section className="flex flex-col gap-3 bg-white border p-4 rounded-xl h-full">
//       <h1 className="font-semibold">Description</h1>
//       <ReactQuill
//         theme="snow"
//         value={data?.description}
//         onChange={handleChange}
//         modules={modules}
//         className="bg-black text-white border-red-950"
//         placeholder="Enter your description here..."
//       />
//       <h1>Never Give Up</h1>
//     </section>
//   );
// }
"use client";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="control-group my-4 space-y-2">
      <div className="button-group flex flex-wrap gap-2">
        {/* Bold */}
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-2 py-1 rounded ${
            editor.isActive("bold") ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Bold
        </button>

        {/* Italic */}
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-2 py-1 rounded ${
            editor.isActive("italic") ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Italic
        </button>

        {/* Strike */}
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`px-2 py-1 rounded ${
            editor.isActive("strike") ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Strike
        </button>

        {/* Code */}
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={`px-2 py-1 rounded ${
            editor.isActive("code") ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Code
        </button>

        {/* Clear Marks */}
        <button
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
          className="px-2 py-1 bg-red-500 text-white rounded"
        >
          Clear Marks
        </button>

        {/* Clear Nodes */}
        <button
          onClick={() => editor.chain().focus().clearNodes().run()}
          className="px-2 py-1 bg-red-500 text-white rounded"
        >
          Clear Nodes
        </button>

        {/* Paragraph */}
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`px-2 py-1 rounded ${
            editor.isActive("paragraph")
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Paragraph
        </button>

        {/* Headings */}
        {[1, 2, 3, 4, 5, 6].map((level) => (
          <button
            key={level}
            onClick={() =>
              editor.chain().focus().toggleHeading({ level }).run()
            }
            className={`px-2 py-1 rounded ${
              editor.isActive("heading", { level })
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            H{level}
          </button>
        ))}

        {/* Bullet List */}
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-2 py-1 rounded ${
            editor.isActive("bulletList")
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Bullet List
        </button>

        {/* Ordered List */}
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`px-2 py-1 rounded ${
            editor.isActive("orderedList")
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Ordered List
        </button>

        {/* Code Block */}
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`px-2 py-1 rounded ${
            editor.isActive("codeBlock")
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Code Block
        </button>

        {/* Blockquote */}
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`px-2 py-1 rounded ${
            editor.isActive("blockquote")
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Blockquote
        </button>

        {/* Horizontal Rule */}
        <button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          Horizontal Rule
        </button>

        {/* Hard Break */}
        <button
          onClick={() => editor.chain().focus().setHardBreak().run()}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          Hard Break
        </button>

        {/* Undo */}
        <button
          onClick={() => editor.chain().focus().undo().run()}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          Undo
        </button>

        {/* Redo */}
        <button
          onClick={() => editor.chain().focus().redo().run()}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          Redo
        </button>
      </div>
    </div>
  );
};

import { Button } from "@nextui-org/react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function Description({ data, handleData }) {
  const editor = useEditor({
    extensions: [StarterKit],
    // content,
    // editorProps: {
    //   attributes: {
    //     spellcheck: 'false',
    //   },
    // },
    content: data?.description || "",
    onUpdate: ({ editor }) => {
      const content = editor.getHTML();
      handleData("description", content);
    },
  });

  const handleChange = (value) => {
    handleData("description", value);
    editor.commands.setContent("");
  };
  const testing = (value) => {
    console.log(value);
    console.log("data", data?.description);
  };

  return (
    <section className="flex flex-col gap-3 bg-white border p-4 rounded-xl h-full">
      <h1 className="font-semibold">Description</h1>
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
        className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:none "
        placeholder="Enter your description here"
        value={data?.description}
        onChange={handleChange}
      />

      {/* <EditorContent
        placeholder="Enter your description here"
        value={data?.description}
        onChange={handleChange}
        editor={editor}
      /> */}
      <Button onClick={testing} color="primary">
        Save
      </Button>
    </section>
  );
}
