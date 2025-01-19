"use client";
import { useState } from "react";

const Examples = () => {
  const [copiedExample, setCopiedExample] = useState<number | null>(null);

  const handleCopy = (exampleIndex: number, code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedExample(exampleIndex);
      setTimeout(() => setCopiedExample(null), 2000);
    });
  };

  const examples = [
    {
      title: "Basic GET Request",
      animation: "animate__fadeInLeft",
      delay: 0,
      code: `# Simple GET request
apee-i request GET https://api.example.com/users

# With query parameters
apee-i request GET https://api.example.com/users \\
    --query "page=1" \\
    --query "limit=10"

# Response
{
    "status": "success",
    "data": [
        {"id": 1, "name": "User 1"},
        {"id": 2, "name": "User 2"}
    ]
}`,
    },
    {
      title: "POST with Authentication",
      animation: "animate__fadeInRight",
      delay: 0,
      code: `# POST request with auth
apee-i request POST https://api.example.com/create \\
    --header "Authorization: Bearer \${TOKEN}" \\
    --body '{
        "name": "New Item",
        "description": "Description"
    }'

# Response
{
    "status": "success",
    "message": "Item created"
}`,
    },
    {
      title: "Using Environment Variables",
      animation: "animate__fadeInLeft",
      delay: 0.2,
      code: `# Set environment variable
apee-i env set API_KEY "your-api-key"

# Use in request
apee-i request GET https://api.example.com/secure \\
    --header "X-API-Key: \${API_KEY}"

# List environments
apee-i env list`,
    },
    {
      title: "Response Validation",
      animation: "animate__fadeInRight",
      delay: 0.2,
      code: `# Validate response against schema
apee-i request GET https://api.example.com/data \\
    --validate schema.json \\
    --format pretty

# Save response to file
apee-i request GET https://api.example.com/data \\
    --output response.json \\
    --format json`,
    },
  ];

  return (
    <section id="examples" className="py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold">Code Examples</h2>
          <p className="mt-4 text-xl text-neutral-400">
            Real-world examples to get you started
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {examples.map((example, index) => (
            <div
              key={index}
              className={`bg-neutral-800 rounded-xl p-6 animate__animated ${example.animation}`}
              style={{ animationDelay: `${example.delay}s` }}
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                {example.title}
              </h3>
              <div className="bg-neutral-900 p-4 rounded-lg overflow-x-auto">
                <pre className="text-cyan-300">
                  <code>{example.code}</code>
                </pre>
              </div>
              <button
                onClick={() => handleCopy(index, example.code)}
                className="mt-4 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-colors text-sm"
              >
                {copiedExample === index ? "Copied!" : "Copy Example"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Examples };
