import { useState } from "react";
import type { MetaEntry as MetaEntryType } from "../lib/types";
import { formatTime } from "../lib/format";

interface Props {
  entry: MetaEntryType;
}

export function MetaEntry({ entry }: Props) {
  const [showDetail, setShowDetail] = useState(false);
  const isError = entry.type === "error";
  const isInjection = entry.type === "injection";
  const isObservation = entry.type === "observation";

  const modelTag = entry.mode ? entry.mode.toUpperCase() : "MC";

  const label = isInjection ? `${modelTag} Injection` :
                isObservation ? `${modelTag} Observation` :
                isError ? `${modelTag} Error` :
                "MetaClaude";

  const typeLabel = isObservation ? `decision: ${entry.decision || "?"}` :
                    isInjection ? "delivered" :
                    isError ? `stage: ${entry.stage || "?"}` :
                    entry.type;

  const content = entry.injection_content || entry.content || entry.error || "";

  const detailText = isObservation ? entry.user_message :
                     isInjection ? entry.user_prompt :
                     null;

  return (
    <div className={`meta-entry ${isError ? "error" : ""}`}>
      <div className="meta-header">
        <span className="meta-label">{label}</span>
        {entry.model_name && (
          <span className="meta-type" style={{ opacity: 0.7 }}>{entry.model_name}</span>
        )}
        <span className="meta-type">{typeLabel}</span>
        {entry.timestamp && (
          <span className="timestamp">{formatTime(entry.timestamp)}</span>
        )}
        {entry.total_latency_ms != null && (
          <span className="timestamp">{entry.total_latency_ms}ms</span>
        )}
      </div>
      {content && <div className="meta-content">{content}</div>}
      {entry.mode && (
        <div className="meta-detail">
          mode: {entry.mode}
          {entry.context_window?.transcript_turns_used != null &&
            ` · ${entry.context_window.transcript_turns_used} turns in context`}
        </div>
      )}
      {detailText && (
        <div className="meta-detail">
          <button
            className="detail-toggle"
            onClick={() => setShowDetail(!showDetail)}
            style={{
              background: "none", border: "none", color: "var(--text-dim)",
              cursor: "pointer", padding: 0, fontSize: "0.85em"
            }}
          >
            {showDetail ? "▾" : "▸"} {isInjection ? "user prompt" : "meta-agent payload"}
          </button>
          {showDetail && (
            <pre style={{
              fontSize: "0.8em", opacity: 0.7, whiteSpace: "pre-wrap",
              maxHeight: "200px", overflow: "auto", marginTop: "4px"
            }}>
              {detailText.length > 2000 ? detailText.slice(0, 2000) + "…" : detailText}
            </pre>
          )}
        </div>
      )}
    </div>
  );
}
