"""Configuration for the LLM Council."""

import os
from dotenv import load_dotenv

load_dotenv()

# API key for the AI gateway
API_KEY = os.getenv("AI_GATEWAY_API_KEY")

# Council members - list of model identifiers supported by the gateway
COUNCIL_MODELS = [
    "deepseek-v4-pro",
    "gpt-5.6-sol",
    "glm-5.2",
    "kimi-k2.6",
]

# Chairman model - synthesizes final response
CHAIRMAN_MODEL = "gpt-5.6-luna"

# AI Gateway API endpoint (OpenAI-compatible)
API_BASE_URL = os.getenv("AI_GATEWAY_BASE_URL", "https://aigw.nis.netease.com/v1")
CHAT_COMPLETIONS_URL = f"{API_BASE_URL}/chat/completions"

# Data directory for conversation storage
DATA_DIR = "data/conversations"
