import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './Discussion.css';

export default function Discussion({ discussions }) {
  const [activeTab, setActiveTab] = useState(0);

  if (!discussions || discussions.length === 0) {
    return null;
  }

  return (
    <div className="stage discussion-stage">
      <h3 className="stage-title">Stage 2: Council Discussion</h3>
      <p className="stage-description">
        Each model reviewed all responses and engaged in discussion — critiquing, agreeing, disagreeing, and building on each other's insights.
      </p>

      <div className="tabs">
        {discussions.map((disc, index) => (
          <button
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {disc.model}
          </button>
        ))}
      </div>

      <div className="tab-content">
        <div className="discussion-model">
          {discussions[activeTab].model}
        </div>
        <div className="discussion-content markdown-content">
          <ReactMarkdown>
            {discussions[activeTab].discussion}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
