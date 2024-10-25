import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "hero": {
        "title": "Meet Your Child’s New Best Friend: The Smart Doll That Talks, Learns, and Grows with Them!",
        "description": "Interactive conversations, learning experiences, and endless fun – all in one smart doll. Control everything with our app!",
        "buyNow": "BUY NOW",
        "contactUs": "Contact Us",
        "imageAlt": "Smart Doll"
      },
      "blogs": {
        "sectionTitle": "Our Blogs",
        "blogPost1": {
          "title": "The Power of Interactive Play in Child Development",
          "description": "Discover how interactive play with smart toys like Toya enhances cognitive abilities, builds emotional intelligence, and strengthens social skills, turning playtime into a key part of your child’s development."
        },
        "blogPost2": {
          "title": "How Smart Toys Can Encourage Emotional Growth in Children",
          "description": "Smart toys like Toya are changing the way children learn by making education interactive, engaging, and fun. Explore how technology is helping kids develop essential skills in new and exciting ways."
        },
        "blogPost3": {
          "title": "Integrating Smart Toys in Early Education",
          "description": "Discover how smart toys like Toya are shaping the future of early education by making learning fun, interactive, and personalized to your child’s needs."
        },
        "blogPost4": {
          "title": "Fostering Social Skills with Toya’s Conversations",
          "description": "Toya does more than entertain—it helps children develop social skills by engaging them in meaningful dialogues. Learn how this smart toy prepares kids for real-world interactions."
        },
        "blogPost5": {
          "title": "The Role of Technology in Modern Parenting",
          "description": "Technology isn’t just for adults—smart toys are reshaping how we approach parenting. Discover tips on how to integrate interactive tech like Toya into your parenting routine for better communication and learning."
        },
        "blogPost6": {
          "title": "Encouraging Creativity in Children with Toya",
          "description": "Unlock your child’s creative potential! See how Toya encourages imagination and creative thinking through storytelling, problem-solving, and role-playing games."
        }
      },
      "howItWorks": {
        "title": "How It Works",
        "download": {
          "title": "Download the App",
          "description": "Get started by downloading our app from the Google Play Store or the Apple App Store. The app is your control center for managing everything from conversations to customization."
        },
        "pair": {
          "title": "Pair Your Smart Doll",
          "description": "Easily connect the smart doll to your phone via Bluetooth and personalize your child’s experience."
        },
        "customize": {
          "title": "Customize & Set Preferences",
          "description": "Choose the doll’s voice, language, and personality. Enter personal details like your child’s name to enhance interaction."
        },
        "monitor": {
          "title": "Monitor and Engage",
          "description": "Stay in control with the parental dashboard. View summaries, set boundaries, and ensure safe interactions."
        },
        "enjoy": {
          "title": "Enjoy Fun, Safe Interaction",
          "description": "Let your child build a connection with the doll through personalized conversations, games, and learning."
        },
        "update": {
          "title": "Update & Enhance the Experience",
          "description": "Regularly update the app to access new features and improvements. Your smart doll will continue to gain new abilities and content, ensuring the fun never stops."
        }
      },
      "home": "Home",
      "about": "About",
      "Blogs": "Blogs",
      "how It Works": "How It Works",
      "contact": "Contact",
      "whyChooseUs": {
        "title": "Why Choose Us?",
        "feature1": "Interactive Learning: Toya blends fun with education, helping kids learn while they play.",
        "feature2": "Personalized Experience: Tailored interactions that adapt to your child's personality and growth.",
        "feature3": "Safe & Secure: Designed with top-tier privacy and security for your child’s safety.",
        "feature4": "Grows with Your Child: Toya evolves with new content as your child develops.",
        "feature5": "Easy Parental Control: Simple app controls let parents customize and monitor playtime.",
        "feature6": "Emotional Development: Promotes empathy and communication through engaging conversations.",
        "imageAlt": "Why Choose Us"
      }
    }
  },
  ar: {
    translation: {
      "hero": {
        "title": "تعرف على أفضل صديق جديد لطفلك الدمية الذكية التي تتحدث، تتعلم، وتنمو معهم",
        "description": "محادثات تفاعلية، تجارب تعليمية، ومرح لا ينتهي - كل هذا في دمية ذكية واحدة. تحكم في كل شيء عبر تطبيقنا",
        "buyNow": "اشترِ الآن",
        "contactUs": "تواصل معنا",
        "imageAlt": "دمية ذكية"
      },
      "whyChooseUs": {
        "title": "لماذا تختارنا؟",
        "feature1": "التعلم التفاعلي: تدمج Toya بين المرح والتعليم لمساعدة الأطفال على التعلم أثناء اللعب.",
        "feature2": "تجربة مخصصة: تفاعلات مصممة تتكيف مع شخصية طفلك ونموه.",
        "feature3": "آمن ومضمون: مصمم بأعلى مستويات الخصوصية والأمان من أجل سلامة طفلك.",
        "feature4": "ينمو مع طفلك: تتطور Toya بمحتوى جديد مع تطور طفلك.",
        "feature5": "سهولة التحكم الأبوي: عناصر تحكم سهلة في التطبيق تتيح للوالدين تخصيص ومراقبة وقت اللعب.",
        "feature6": "تنمية عاطفية: يعزز التعاطف والتواصل من خلال المحادثات المشوقة.",
        "imageAlt": "لماذا تختارنا؟"
      },
      "blogs": {
        "sectionTitle": "مدوناتنا",
        "blogPost1": {
          "title": "قوة اللعب التفاعلي في تنمية الطفل",
          "description": "اكتشف كيف يعزز اللعب التفاعلي مع الألعاب الذكية مثل تويا القدرات المعرفية ويبني الذكاء العاطفي ويقوي المهارات الاجتماعية، مما يجعل وقت اللعب جزءًا أساسيًا من نمو طفلك."
        },
        "blogPost2": {
          "title": "كيف يمكن أن تشجع الألعاب الذكية النمو العاطفي لدى الأطفال",
          "description": "تغير الألعاب الذكية مثل تويا الطريقة التي يتعلم بها الأطفال من خلال جعل التعليم تفاعليًا وجذابًا وممتعًا. اكتشف كيف تساعد التكنولوجيا الأطفال على تطوير مهارات أساسية بطرق جديدة ومثيرة."
        },
        "blogPost3": {
          "title": "دمج الألعاب الذكية في التعليم المبكر",
          "description": "اكتشف كيف تشكل الألعاب الذكية مثل تويا مستقبل التعليم المبكر من خلال جعل التعلم ممتعًا وتفاعليًا ومخصصًا لاحتياجات طفلك."
        },
        "blogPost4": {
          "title": "تنمية المهارات الاجتماعية من خلال محادثات تويا",
          "description": "تويا لا تقتصر على الترفيه - بل تساعد الأطفال على تطوير المهارات الاجتماعية من خلال إشراكهم في حوارات هادفة. تعرف على كيفية تحضير هذه اللعبة الذكية الأطفال للتفاعلات الواقعية."
        },
        "blogPost5": {
          "title": "دور التكنولوجيا في التربية الحديثة",
          "description": "التكنولوجيا ليست فقط للبالغين - الألعاب الذكية تعيد تشكيل كيفية تعاملنا مع التربية. اكتشف نصائح حول كيفية دمج التكنولوجيا التفاعلية مثل تويا في روتين التربية الخاص بك لتحسين التواصل والتعلم."
        },
        "blogPost6": {
          "title": "تشجيع الإبداع لدى الأطفال باستخدام تويا",
          "description": "افتح الباب أمام إبداع طفلك! اكتشف كيف تشجع تويا الخيال والتفكير الإبداعي من خلال سرد القصص وحل المشكلات وألعاب الدور."
        }
      },
      "howItWorks": {
        "title": "كيف تعمل الدمية",
        "download": {
          "title": "قم بتنزيل التطبيق",
          "description": "ابدأ بتنزيل التطبيق من متجر Google Play أو متجر Apple App Store. التطبيق هو مركز التحكم الخاص بك لإدارة كل شيء من المحادثات إلى التخصيص."
        },
        "pair": {
          "title": "قم بتوصيل الدمية الذكية",
          "description": "قم بتوصيل الدمية الذكية بهاتفك بسهولة عبر Bluetooth وتخصيص تجربة طفلك."
        },
        "customize": {
          "title": "تخصيص وتعيين التفضيلات",
          "description": "اختر صوت الدمية ولغتها وشخصيتها. أدخل تفاصيل شخصية مثل اسم طفلك لتعزيز التفاعل."
        },
        "monitor": {
          "title": "المراقبة والتفاعل",
          "description": "ابقَ في السيطرة مع لوحة المعلومات الخاصة بالوالدين. اعرض الملخصات، وضبط الحدود، وتأكد من التفاعلات الآمنة."
        },
        "enjoy": {
          "title": "استمتع بالتفاعل الممتع والآمن",
          "description": "دع طفلك يبني علاقة مع الدمية من خلال محادثات مخصصة وألعاب وتجارب تعليمية."
        },
        "update": {
          "title": "قم بالتحديث وتعزيز التجربة",
          "description": "قم بتحديث التطبيق بانتظام للوصول إلى ميزات جديدة وتحسينات. ستواصل دميتك الذكية اكتساب قدرات ومحتوى جديد، مما يضمن عدم توقف المرح."
        }
      },
      "home": "الرئيسية",
      "about": "من نحن",
      "Blogs": "المدونات",
      "how It Works": "كيف تعمل الدمية",
      "contact": "تواصل معنا"
    }
  }
};

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en", // Use English if the translation is not available
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;
