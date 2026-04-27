export const diseaseDatabase = {
  malaria: {
    disease: "Malaria",
    description: "A mosquito-borne parasitic infection. Characterized by cyclic high fevers, intense chills, and sweating.",
    severity: "high",
    treatments: ["Take antimalarial medication (ACT)", "Stay hydrated with ORS", "Clinical blood test required", "Use mosquito nets"],
    foods: ["Citrus fruits", "Bone broth", "Coconut water", "Sukuma wiki"]
  },
  typhoid: {
    disease: "Typhoid Fever",
    description: "A bacterial infection spread through contaminated food/water. Causes prolonged fever and weakness.",
    severity: "high",
    treatments: ["Complete full course of antibiotics", "Drink clean boiled water", "Strict hand hygiene", "Hospital visit recommended"],
    foods: ["Soft porridge", "Bananas", "Rice", "Boiled vegetables"]
  },
  cholera: {
    disease: "Cholera",
    description: "A severe diarrheal disease caused by contaminated water leading to rapid dehydration.",
    severity: "critical",
    treatments: ["Immediate ORS intake", "Emergency IV fluids", "Antibiotics if prescribed", "Urgent medical attention"],
    foods: ["ORS solution", "Rice water", "Bananas"]
  },
  flu: {
    disease: "Influenza (Flu)",
    description: "A viral respiratory infection causing fever, cough, and body aches.",
    severity: "medium",
    treatments: ["Bed rest", "Warm fluids", "Take paracetamol for pain", "Steam inhalation"],
    foods: ["Chicken soup", "Ginger tea", "Citrus fruits", "Honey"]
  },
  pneumonia: {
    disease: "Pneumonia",
    description: "A lung infection that causes difficulty breathing, chest pain, and productive cough.",
    severity: "high",
    treatments: ["Antibiotics (if bacterial)", "Oxygen therapy if needed", "Chest physiotherapy", "Hospital care"],
    foods: ["Warm soup", "Garlic", "Protein-rich foods"]
  },
  tuberculosis: {
    disease: "Tuberculosis (TB)",
    description: "A contagious bacterial infection causing chronic cough, weight loss, and night sweats.",
    severity: "high",
    treatments: ["Long-term medication (6+ months)", "Strict adherence to doses", "Regular clinic follow-ups", "Nutrition support"],
    foods: ["Eggs", "Milk", "Beans", "High-calorie fruits"]
  },
  hiv: {
    disease: "HIV/AIDS",
    description: "A virus that weakens the immune system. Requires lifelong management but allows a healthy life.",
    severity: "chronic",
    treatments: ["Antiretroviral therapy (ART)", "Consistent medication timing", "Regular viral load checkups", "Infection prevention"],
    foods: ["Balanced diet", "Green vegetables", "Lean proteins", "Fruits"]
  },
  diabetes: {
    disease: "Diabetes",
    description: "A chronic condition affecting blood sugar. Causes excessive thirst and frequent urination.",
    severity: "chronic",
    treatments: ["Monitor blood sugar daily", "Insulin or oral medication", "Regular exercise", "Foot care management"],
    foods: ["Whole grains (Brown rice/Ugali)", "Leafy greens", "Beans", "Avoid sugar"]
  },
  hypertension: {
    disease: "Hypertension",
    description: "High blood pressure. Increases risk of heart disease and stroke if unmanaged.",
    severity: "chronic",
    treatments: ["Reduce salt intake", "Daily exercise", "Prescribed BP medication", "Stress reduction"],
    foods: ["Low-salt meals", "Bananas (Potassium)", "Vegetables", "Fish"]
  },
  ulcers: {
    disease: "Peptic Ulcers",
    description: "Sores in the stomach lining. Causes burning pain, especially on an empty stomach.",
    severity: "medium",
    treatments: ["Take antacids/PPIs", "Avoid spicy/acidic foods", "Eat small frequent meals", "Reduce stress"],
    foods: ["Bananas", "Oatmeal", "Plain milk", "Cabbage juice"]
  },
  asthma: {
    disease: "Asthma",
    description: "Inflammation of airways causing wheezing, chest tightness, and gasping for air.",
    severity: "medium",
    treatments: ["Use rescue inhaler (Salbutamol)", "Preventer inhaler daily", "Identify and avoid triggers (dust/smoke)"],
    foods: ["Omega-3 rich foods", "Fruits", "Vegetables", "Onions"]
  },
  meningitis: {
    disease: "Meningitis",
    description: "Inflammation of brain membranes. Causes stiff neck, high fever, and sensitivity to light.",
    severity: "critical",
    treatments: ["Emergency hospital admission", "Intravenous antibiotics", "Immediate medical diagnosis"],
    foods: ["Soft foods", "High-nutrient fluids"]
  },
  sickleCell: {
    disease: "Sickle Cell Disease",
    description: "A genetic blood disorder. Causes painful crises, anemia, and vulnerability to infections.",
    severity: "chronic",
    treatments: ["Hydration (high water intake)", "Pain relief during crisis", "Folic acid supplements", "Regular checkups"],
    foods: ["Leafy greens", "Beans", "Fresh fruits", "Liver"]
  },
  covid19: {
    disease: "COVID-19",
    description: "Viral respiratory infection with variable symptoms including loss of taste/smell.",
    severity: "variable",
    treatments: ["Self-isolation", "Supportive care", "Vaccination", "Monitor oxygen levels"],
    foods: ["Citrus fruits", "Warm fluids", "Protein-rich foods", "Zinc-rich foods"]
  },
  diarrhea: {
    disease: "Standard Diarrhea",
    description: "Loose stools caused by mild infection or dietary changes. Main risk is dehydration.",
    severity: "medium",
    treatments: ["ORS solution", "Zinc supplements", "Drink clean water", "Monitor frequency"],
    foods: ["BRAT diet (Banana, Rice, Applesauce, Toast)"]
  },
  anemia: {
    disease: "Anemia",
    description: "Lacking enough healthy red blood cells to carry oxygen. Causes pale skin and dizziness.",
    severity: "medium",
    treatments: ["Iron & B12 supplements", "Treat underlying causes", "Blood test checkup"],
    foods: ["Liver / Red meat", "Spinach (Sukuma)", "Beans", "Beetroot"]
  },
  depression: {
    disease: "Depression",
    description: "A mental health condition with persistent low mood and lack of energy.",
    severity: "high",
    treatments: ["Professional counseling/therapy", "Physical activity", "Community support", "Medication if severe"],
    foods: ["Walnuts", "Berries", "Dark chocolate", "Fatty fish"]
  },
  anxiety: {
    disease: "Anxiety",
    description: "Intense worry or fear. Can cause physical symptoms like rapid heart rate.",
    severity: "medium",
    treatments: ["Deep breathing exercises", "Cognitive Behavioral Therapy (CBT)", "Reduce caffeine", "Stress management"],
    foods: ["Chamomile tea", "Green tea", "Turmeric", "Yogurt"]
  },
  dehydration: {
    disease: "Dehydration",
    description: "Loss of body fluids. Common in hot climates or during illness.",
    severity: "medium",
    treatments: ["Drink ORS or water", "Avoid alcohol/caffeine", "Rest in cool area"],
    foods: ["Watermelon", "Cucumber", "Coconut water"]
  },
  uti: {
    disease: "Urinary Tract Infection (UTI)",
    description: "Infection in the urinary system. Causes pain during urination.",
    severity: "medium",
    treatments: ["Antibiotics (Full course)", "Increase water intake", "Cranberry extract"],
    foods: ["Cranberries", "Yogurt", "Garlic", "Water"]
  },

  // === NEW DISEASES ADDED BELOW ===

  cold: {
    disease: "Common Cold",
    description: "A mild viral upper respiratory infection causing runny nose, sneezing, and mild fatigue.",
    severity: "low",
    treatments: ["Rest and hydration", "Over-the-counter decongestants", "Saltwater gargle", "Steam inhalation"],
    foods: ["Ginger tea", "Honey", "Citrus fruits", "Garlic"]
  },
  bronchitis: {
    disease: "Bronchitis",
    description: "Inflammation of the bronchial tubes causing persistent cough with mucus.",
    severity: "medium",
    treatments: ["Rest and fluids", "Humidifier or steam", "Cough syrup if needed", "Antibiotics only if bacterial"],
    foods: ["Warm soups", "Honey-lemon drink", "Ginger", "Turmeric milk"]
  },
  measles: {
    disease: "Measles",
    description: "Highly contagious viral infection with high fever and characteristic red rash.",
    severity: "high",
    treatments: ["Supportive care and rest", "Vitamin A supplements", "Isolation to prevent spread", "Hospital care if complications"],
    foods: ["Soft fruits", "Porridge", "Vitamin A rich foods like carrots", "Fluids"]
  },
  chickenpox: {
    disease: "Chickenpox",
    description: "Viral infection causing itchy blister-like rash, fever, and tiredness.",
    severity: "medium",
    treatments: ["Calamine lotion for itch", "Paracetamol for fever", "Avoid scratching", "Antiviral if severe"],
    foods: ["Cooling foods like yogurt", "Fruits", "Oatmeal bath (not food but supportive)", "Soft diet"]
  },
  hepatitis: {
    disease: "Hepatitis (A/B/C)",
    description: "Liver inflammation often from virus or contaminated food/water. Causes jaundice and fatigue.",
    severity: "high",
    treatments: ["Rest and supportive care", "Antiviral medication for B/C", "Vaccination for prevention", "Avoid alcohol"],
    foods: ["Leafy greens", "Beetroot", "Lemon water", "High protein (light)"]
  },
  gastritis: {
    disease: "Gastritis",
    description: "Inflammation of the stomach lining causing upper abdominal pain and nausea.",
    severity: "medium",
    treatments: ["Antacids or PPIs", "Avoid irritants (spices/alcohol)", "Small frequent meals", "Stress reduction"],
    foods: ["Bananas", "Plain rice", "Yogurt", "Cabbage juice"]
  },
  migraine: {
    disease: "Migraine",
    description: "Severe throbbing headache often with nausea and sensitivity to light/sound.",
    severity: "medium",
    treatments: ["Rest in dark quiet room", "Pain relievers (ibuprofen/paracetamol)", "Identify triggers", "Hydration"],
    foods: ["Ginger tea", "Magnesium-rich foods", "Bananas", "Avoid caffeine/chocolate"]
  },
  appendicitis: {
    disease: "Appendicitis",
    description: "Inflammation of the appendix causing severe right lower abdominal pain.",
    severity: "critical",
    treatments: ["Emergency surgery (appendectomy)", "Antibiotics", "Immediate hospital visit"],
    foods: ["None until after surgery – clear fluids only"]
  },
  arthritis: {
    disease: "Arthritis",
    description: "Joint inflammation causing pain, stiffness, and swelling (osteoarthritis or rheumatoid).",
    severity: "chronic",
    treatments: ["Pain relief medication", "Regular gentle exercise", "Physiotherapy", "Anti-inflammatory drugs"],
    foods: ["Fatty fish (Omega-3)", "Turmeric", "Berries", "Leafy greens"]
  },
  dengue: {
    disease: "Dengue Fever",
    description: "Mosquito-borne viral infection causing high fever, severe body aches, and rash.",
    severity: "high",
    treatments: ["Supportive care and hydration", "Paracetamol for fever/pain", "Avoid aspirin", "Hospital monitoring for severe cases"],
    foods: ["Papaya leaf juice", "Coconut water", "Citrus fruits", "High fluid intake"]
  },
  schistosomiasis: {
    disease: "Schistosomiasis (Bilharzia)",
    description: "Parasitic worm infection from contaminated freshwater. Causes blood in urine or stool.",
    severity: "medium",
    treatments: ["Praziquantel medication", "Avoid swimming in infested water", "Regular screening in endemic areas"],
    foods: ["Iron-rich foods", "Leafy greens", "Protein sources", "Clean safe water"]
  },
  kidneyStones: {
    disease: "Kidney Stones",
    description: "Hard mineral deposits in kidneys causing severe flank pain and blood in urine.",
    severity: "high",
    treatments: ["Increase fluid intake", "Pain management", "Medical expulsion therapy", "Surgery if large"],
    foods: ["Lemon water", "High water intake", "Low salt/oxalate foods", "Citrus fruits"]
  },
  epilepsy: {
    disease: "Epilepsy",
    description: "Neurological disorder causing recurrent seizures.",
    severity: "chronic",
    treatments: ["Anti-seizure medication", "Regular neurologist follow-up", "Avoid triggers (sleep deprivation/flashing lights)", "Safety measures"],
    foods: ["Ketogenic diet in some cases", "Balanced nutrition", "Avoid alcohol"]
  },
  heartDisease: {
    disease: "Heart Disease (Cardiovascular)",
    description: "Conditions affecting the heart including coronary artery disease. Causes chest pain and shortness of breath.",
    severity: "chronic",
    treatments: ["Prescribed heart medication", "Lifestyle changes (exercise/diet)", "Regular checkups", "Stent or surgery if needed"],
    foods: ["Oats", "Fatty fish", "Nuts", "Fruits and vegetables"]
  },
  cancer: {
    disease: "Cancer (General)",
    description: "Uncontrolled cell growth that can affect any organ. Symptoms vary widely by type and stage.",
    severity: "critical",
    treatments: ["Chemotherapy/radiation/surgery", "Targeted therapy", "Palliative care", "Early detection screening"],
    foods: ["Antioxidant-rich fruits/vegetables", "Turmeric", "Green tea", "High protein during treatment"]
  }
};

const symptomMap = {
  fever: ['malaria', 'flu', 'typhoid', 'pneumonia', 'meningitis', 'covid19', 'tb', 'measles', 'dengue', 'chickenpox'],
  headache: ['malaria', 'flu', 'migraine', 'typhoid', 'hypertension', 'meningitis', 'anxiety', 'dengue'],
  chills: ['malaria', 'flu', 'pneumonia'],
  cough: ['flu', 'cold', 'pneumonia', 'tuberculosis', 'covid19', 'asthma', 'bronchitis'],
  'sore throat': ['flu', 'cold', 'covid19'],
  sneezing: ['cold', 'flu'],
  'runny nose': ['cold'],
  nausea: ['malaria', 'typhoid', 'gastritis', 'ulcers', 'meningitis', 'migraine'],
  vomiting: ['malaria', 'typhoid', 'cholera', 'meningitis'],
  diarrhea: ['cholera', 'diarrhea', 'typhoid', 'schistosomiasis'],
  'body aches': ['flu', 'malaria', 'sickleCell', 'covid19', 'dengue'],
  fatigue: ['malaria', 'flu', 'typhoid', 'anemia', 'hiv', 'depression', 'hepatitis', 'tb'],
  'stomach pain': ['gastritis', 'typhoid', 'ulcers', 'cholera', 'appendicitis'],
  'loss of appetite': ['typhoid', 'malaria', 'gastritis', 'tb', 'hiv', 'hepatitis'],
  sweating: ['malaria', 'flu', 'tb'],
  'joint pain': ['malaria', 'flu', 'sickleCell', 'dengue', 'arthritis'],
  dizziness: ['anemia', 'hypertension', 'migraine', 'dehydration'],
  'stiff neck': ['meningitis'],
  'shortness of breath': ['asthma', 'pneumonia', 'covid19', 'anemia', 'heartDisease'],
  'weight loss': ['tuberculosis', 'hiv', 'diabetes', 'cancer'],
  'frequent urination': ['diabetes', 'uti'],
  'burning sensation': ['uti', 'ulcers'],
  'blurred vision': ['diabetes', 'hypertension', 'migraine'],
  'sensitivity to light': ['migraine', 'meningitis'],
  'night sweats': ['tuberculosis', 'hiv'],
  'chest pain': ['pneumonia', 'asthma', 'hypertension', 'heartDisease'],
  'sadness': ['depression'],
  'worry': ['anxiety'],
  'thirst': ['diabetes', 'dehydration', 'cholera'],
  'bloating': ['gastritis', 'ulcers'],
  rash: ['measles', 'chickenpox', 'dengue'],
  'itchy skin': ['chickenpox'],
  jaundice: ['hepatitis'],
  'blood in urine': ['uti', 'schistosomiasis', 'kidneyStones'],
  'abdominal pain': ['appendicitis', 'gastritis', 'ulcers', 'kidneyStones'],
  seizures: ['epilepsy'],
  'joint swelling': ['arthritis']
};

export function analyzeSymptoms(input) {
  const normalizedInput = input.toLowerCase().trim();
  
  // 1. Check for direct disease mention (priority)
  for (const key in diseaseDatabase) {
    if (normalizedInput.includes(key.toLowerCase()) || 
        normalizedInput.includes(diseaseDatabase[key].disease.toLowerCase())) {
      return [diseaseDatabase[key]];
    }
  }

  // 2. Weighted Scoring Logic
  const scores = {};
  
  Object.entries(symptomMap).forEach(([symptom, diseases]) => {
    if (normalizedInput.includes(symptom)) {
      // Weight logic: rare symptoms get 3 points, common ones get 1.
      const weight = diseases.length <= 2 ? 3 : 1;
      
      diseases.forEach(dKey => {
        scores[dKey] = (scores[dKey] || 0) + weight;
      });
    }
  });

  // 3. Deduplicate and Sort
  const sortedResultKeys = Object.entries(scores)
    .sort(([, a], [, b]) => b - a)
    .map(([key]) => key);

  // 4. Return Top 3 Objects
  if (sortedResultKeys.length === 0) {
    return [{
      disease: "No Specific Match",
      description: "I couldn't identify specific symptoms from your input. Try using words like 'stiff neck', 'fever', 'rash', or 'abdominal pain'.",
      severity: "low",
      treatments: ["Consult a doctor", "Monitor symptoms", "Stay hydrated"],
      foods: ["Balanced nutrition", "Water"]
    }];
  }

  return sortedResultKeys.slice(0, 3).map(key => diseaseDatabase[key]);
}