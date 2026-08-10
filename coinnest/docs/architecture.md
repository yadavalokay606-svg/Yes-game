# Architecture Notes

This file sketches a backend and schema to support the CoinNest platform once the prototype moves to production.

Entities:
- users: id, name, email, role (user/brand/admin), wallet_balance, lifetime_earned
- brands: id, name, contact, onboarding_verified
- campaigns: id, brand_id, title, type, budget, reward_per_action, start_at, end_at, status
- tasks (campaign actions): id, campaign_id, type (feedback/survey/quiz/ugc), metadata
- participations: id, user_id, task_id, status (pending/verified/rejected), evidence
- wallet_ledger: id, user_id, delta_coins, reason, related_participation_id, status
- redemptions: id, user_id, amount, method (UPI/voucher), status

Verification pipeline:
- Automated checks (screenshot heuristics, bot scoring)
- Manual review queue for flagged items
- Fraud scoring stored on participations for audit

Notes:
- Use idempotent endpoints for participation creation and verification
- Keep ledger as single source of truth for coin accounting
