export type Intent =
  | 'greeting'
  | 'whatsapp'
  | 'services'
  | 'pricing'
  | 'process'
  | 'contact'
  | 'faq'
  | 'chatbot'
  | 'ecommerce'
  | 'automation'
  | 'images'
  | 'landing'
  | 'about'
  | 'project_request'
  | 'unknown';

export type Language = 'en' | 'hi' | 'hinglish';

const patterns: [Intent, RegExp][] = [
  ['greeting', /\b(hi|hello|hey|namaste|hii|helo|namaskar|hyi|salam)\b/i],
  ['whatsapp', /whatsapp|direct chat|chat directly/i],
  ['chatbot', /chatbot|ai bot|bot bana|chat bot|virtual assistant|bot chahiye|bot banana/i],
  ['ecommerce', /shopify|woocommerce|e-?commerce|online store|sell online|product sell|store banana/i],
  ['automation', /automat|crm|google sheets|zapier|razorpay|stripe|booking integrat|workflow integrat|workflow|integration/i],
  ['images', /\bimage|product photo|ai image|visual|banner|lifestyle photo|photo banana/i],
  ['landing', /landing page|ad page|conversion page|ppc page|landing banana/i],
  ['project_request', /\b(need|want|build|create|make|require|chahiye|banana|banao|bana do|banaiye)\b.{0,40}\b(website|site|web app|app|store|portal|page)\b/i],
  ['services', /service|website|wix|design|develop|kya karta|what do you|kya banate|website chahiye|website banana/i],
  ['pricing', /price|pricing|cost|kitna|how much|charges|fees|rate|budget|daam|kharcha/i],
  ['process', /process|timeline|steps|kaise|how does|how do|stages|kitne din|kab tak/i],
  ['contact', /contact|reach|email|phone|call|number|connect|baat karna|sampark/i],
  ['faq', /seo|aeo|geo|mobile|revision|support|refund|guarantee|hosting|gst|payment|technical/i],
  ['about', /about|who are you|kaun ho|about sitecraf|experience|portfolio|team/i],
];

export function detectIntent(message: string): Intent {
  const normalized = message.toLowerCase().trim();
  for (const [intent, pattern] of patterns) {
    if (pattern.test(normalized)) return intent;
  }
  return 'unknown';
}

export function detectLanguage(message: string): Language {
  if (/[ऀ-ॿ]/.test(message)) return 'hi';
  if (/\b(kya|hai|karo|bhai|yaar|chahiye|kitna|kaise|nahin|nahi|aur|mujhe|hoga|karega|batao|lagega|milega|milta|dena|lena|toh|tho|bolo|puch|banana|kar|raha|rahe|rahi|karte|ke|ka|ki|ho|hain|hu|hun|ye|yeh|wo|woh|in|un|jin|jo)\b/i.test(message)) return 'hinglish';
  return 'en';
}
