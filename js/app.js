/**
 * MastoLand Web Portal Core Script
 * Logic for responsive navigation, theme toggle, accent color selector, scroll interactions,
 * and dynamic multi-language localization (ES, EN, DE, FR, JA, PT).
 */

// Force scroll to top on refresh (prevent browser scroll restoration early)
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

window.addEventListener('pageshow', () => {
    window.scrollTo(0, 0);
});

document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);

    // DOM Elements
    const header = document.getElementById('main-header');
    const themeBtn = document.getElementById('theme-btn');
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const navigationMenu = document.getElementById('navigation-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const logoImage = document.getElementById('logo-image');
    
    // Language Dropdown Elements
    const langBtn = document.getElementById('lang-btn');
    const langDropdown = document.getElementById('lang-dropdown');
    
    // Theme Switcher Logic
    const initTheme = () => {
        const savedTheme = localStorage.getItem('mastoland-theme');
        const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        
        if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            updateLogoForTheme('light');
        } else {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
            updateLogoForTheme('dark');
        }
    };

    const updateLogoForTheme = (theme) => {
        if (!logoImage) return;
        if (theme === 'light') {
            logoImage.src = 'img/ic_launcher_light.png';
        } else {
            logoImage.src = 'img/ic_launcher_dark.png';
        }
    };

    themeBtn.addEventListener('click', () => {
        if (document.body.classList.contains('light-theme')) {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            localStorage.setItem('mastoland-theme', 'dark');
            updateLogoForTheme('dark');
        } else {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            localStorage.setItem('mastoland-theme', 'light');
            updateLogoForTheme('light');
        }
    });

    // Accent Colors Configuration
    const accentColors = {
        indigo: {
            primary: '#6364ff',
            secondary: '#a259ff',
            gradient: 'linear-gradient(135deg, #6364ff 0%, #a259ff 100%)',
            glow: 'rgba(99, 100, 255, 0.4)'
        },
        blue: {
            primary: '#3088d4',
            secondary: '#00d2ff',
            gradient: 'linear-gradient(135deg, #3088d4 0%, #00d2ff 100%)',
            glow: 'rgba(48, 136, 212, 0.4)'
        },
        green: {
            primary: '#10b981',
            secondary: '#059669',
            gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            glow: 'rgba(16, 185, 129, 0.4)'
        },
        amber: {
            primary: '#f59e0b',
            secondary: '#d97706',
            gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            glow: 'rgba(245, 158, 11, 0.4)'
        },
        rose: {
            primary: '#f43f5e',
            secondary: '#e11d48',
            gradient: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)',
            glow: 'rgba(244, 63, 94, 0.4)'
        }
    };

    const setAccentColor = (colorName) => {
        const root = document.documentElement;
        const colorData = accentColors[colorName];
        if (!colorData) return;
        
        root.style.setProperty('--accent-primary', colorData.primary);
        root.style.setProperty('--accent-secondary', colorData.secondary);
        root.style.setProperty('--accent-gradient', colorData.gradient);
        root.style.setProperty('--accent-glow', colorData.glow);
        
        // Update active status in selector
        document.querySelectorAll('.accent-dot').forEach(dot => {
            if (dot.getAttribute('data-color') === colorName) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
        
        localStorage.setItem('mastoland-accent', colorName);
    };

    const initAccent = () => {
        const savedAccent = localStorage.getItem('mastoland-accent') || 'indigo';
        setAccentColor(savedAccent);
    };

    // Accent Selector Event Listeners
    document.querySelectorAll('.accent-dot').forEach(dot => {
        dot.addEventListener('click', (e) => {
            const color = e.target.getAttribute('data-color');
            setAccentColor(color);
        });
    });

    // ── Translation System ──────────────────────────────────────────────────
    const translations = {
        es: {
            title: "MastoLand - Cliente de Mastodon Nativo para Android",
            metaDesc: "MastoLand es un cliente nativo, rápido y premium para Mastodon en Android. Desarrollado con Jetpack Compose, con diseño moderno, sincronización segura con Google Drive y 100% de privacidad.",
            home: "Inicio",
            features: "Características",
            security: "Seguridad",
            download: "Descarga",
            privacy: "Privacidad",
            navDownload: "Descargar",
            heroBadge: "Cliente Premium de Mastodon",
            heroTitle: "El Fediverso en la palma de tu mano, <span class=\"gradient-text\">rápido y nativo</span>.",
            heroDesc: "MastoLand redefine tu experiencia en Mastodon. Una interfaz limpia desarrollada al 100% con Jetpack Compose para Android que ofrece velocidad, personalización y un control absoluto sobre tu privacidad.",
            heroPlaystore: "Obtener en Google Play",
            heroFeatures: "Explorar Características",
            statSpeed: "Interfaz Fluida",
            statPrivacy: "Privado",
            statSdk: "Android 13+",
            featSubtitle: "Características principales",
            featTitle: "Diseñado para la velocidad, <span class=\"gradient-text\">respetando tu privacidad</span>.",
            featDesc: "MastoLand elimina los intermediarios de tu experiencia social. Una conexión directa con el Fediverso bajo una UI que deleita.",
            feat1Title: "100% Descentralizado y Privado",
            feat1Desc: "MastoLand no tiene servidores ni bases de datos centrales. Tus tokens de acceso se guardan de forma segura localmente en tu dispositivo. Sin telemetría oculta ni publicidad.",
            feat2Title: "Arquitectura Limpia y Modular",
            feat2Desc: "Construido bajo estrictos patrones de modularización (SRP) en Jetpack Compose. Separación rigurosa de capas de datos y presentación para un rendimiento óptimo e incremental.",
            feat3Title: "Rendimiento Multimedia Inteligente",
            feat3Desc: "Carga y visualización hiperrápida de fotos, avatares, GIFs y videos optimizada con Coil y una caché local avanzada. Disfruta de la red sin consumir datos innecesarios.",
            feat4Title: "Gestión Multi-cuenta",
            feat4Desc: "Administra múltiples perfiles en diferentes instancias de Mastodon simultáneamente con transiciones rápidas e independientes sin perder el hilo de tus notificaciones.",
            secSubtitle: "Seguridad Proactiva",
            secTitle: "Respaldos en la nube, <span class=\"gradient-text\">seguros e inmunes a la latencia</span>.",
            secDesc: "Nuestra arquitectura reactiva de sincronización con Google Drive está pensada para que nunca pierdas tus preferencias de forma segura.",
            gdriveTitle: "Google Drive Sync",
            gdriveSubtitle: "Encriptación de Extremo a Extremo",
            gdriveDate: "Fecha: Hoy, 07:45 AM",
            gdriveStatus: "Activo",
            gdriveFooter: "🔒 Claves de encriptación generadas localmente mediante Android Keystore.",
            secItem1: "<strong>Sincronización Reactiva Sostenible:</strong> Cero consumo en segundo plano. Los respaldos solo se disparan por acciones directas (como cambio de preferencias o adición de cuenta).",
            secItem2: "<strong>Arquitectura Contra Respuestas Fantasma:</strong> Cada archivo de respaldo utiliza un timestamp dinámico para sortear la consistencia eventual de la API de Drive.",
            secItem3: "<strong>Filtro Safe-Guard de Payload:</strong> Verificación rigurosa previa a la encriptación. Si falta alguna clave de diseño o preferencia esencial, el respaldo se cancela protegiendo la integridad.",
            downTitle: "Únete al Fediverso con MastoLand",
            downDesc: "Descarga la aplicación oficial desde Google Play e inicia sesión de forma segura y directa con tus credenciales de Mastodon.",
            playstoreTitle: "MastoLand para Android",
            playstoreDesc: "Instalación directa y segura desde la tienda oficial de Google. Compatible con Android 13.0 (API 33) o superior. Recibe actualizaciones automáticas de seguridad y rendimiento de forma inmediata.",
            playstoreBtn: "Disponible en Google Play",
            footerBrandDesc: "Un cliente nativo de Mastodon para Android, rápido, fluido y modular. Desarrollado pensando en el usuario y su privacidad.",
            footerNavTitle: "Navegación",
            footerLegalTitle: "Legal",
            footerDeletionLink: "Eliminación de Datos",
            footerContactTitle: "Contacto",
            footerSupportLink: "Soporte Técnico",
            footerCopyright: "&copy; 2026 MastoLand. Desarrollado por José Rodolfo De La Torre. Todos los derechos reservados."
        },
        en: {
            title: "MastoLand - Native Mastodon Client for Android",
            metaDesc: "MastoLand is a native, fast, and premium Mastodon client for Android. Built with Jetpack Compose, featuring a modern design, secure Google Drive synchronization, and 100% privacy.",
            home: "Home",
            features: "Features",
            security: "Security",
            download: "Download",
            privacy: "Privacy",
            navDownload: "Download",
            heroBadge: "Premium Mastodon Client",
            heroTitle: "The Fediverse in the palm of your hand, <span class=\"gradient-text\">fast and native</span>.",
            heroDesc: "MastoLand redefines your Mastodon experience. A clean UI built 100% with Jetpack Compose for Android that delivers speed, customization, and absolute control over your privacy.",
            heroPlaystore: "Get it on Google Play",
            heroFeatures: "Explore Features",
            statSpeed: "Fluid Interface",
            statPrivacy: "Private",
            statSdk: "Android 13+",
            featSubtitle: "Main Features",
            featTitle: "Designed for speed, <span class=\"gradient-text\">while respecting your privacy</span>.",
            featDesc: "MastoLand removes intermediaries from your social experience. A direct connection to the Fediverse with a UI that delights.",
            feat1Title: "100% Decentralized & Private",
            feat1Desc: "MastoLand has no central servers or databases. Your access tokens are saved securely locally on your device. No hidden telemetry or advertising.",
            feat2Title: "Clean & Modular Architecture",
            feat2Desc: "Built under strict modularization patterns (SRP) in Jetpack Compose. Rigorous separation of data and presentation layers for optimal and incremental performance.",
            feat3Title: "Smart Multimedia Performance",
            feat3Desc: "Hyper-fast loading and display of photos, avatars, GIFs, and videos optimized with Coil and advanced local caching. Enjoy the network without consuming unnecessary data.",
            feat4Title: "Multi-Account Management",
            feat4Desc: "Manage multiple profiles on different Mastodon instances simultaneously with quick and independent transitions without losing track of your notifications.",
            secSubtitle: "Proactive Security",
            secTitle: "Cloud backups, <span class=\"gradient-text\">secure and immune to latency</span>.",
            secDesc: "Our reactive Google Drive synchronization architecture is designed so that you never lose your preferences securely.",
            gdriveTitle: "Google Drive Sync",
            gdriveSubtitle: "End-to-End Encryption",
            gdriveDate: "Date: Today, 07:45 AM",
            gdriveStatus: "Active",
            gdriveFooter: "🔒 Encryption keys generated locally using Android Keystore.",
            secItem1: "<strong>Sustainable Reactive Sync:</strong> Zero background consumption. Backups are only triggered by direct actions (such as changing preferences or adding an account).",
            secItem2: "<strong>Anti-Phantom Response Architecture:</strong> Each backup file uses a dynamic timestamp to bypass the eventual consistency of the Drive API.",
            secItem3: "<strong>Payload Safe-Guard Filter:</strong> Rigorous pre-encryption verification. If any design key or essential preference is missing, the backup is canceled to protect integrity.",
            downTitle: "Join the Fediverse with MastoLand",
            downDesc: "Download the official app from Google Play and log in securely and directly with your Mastodon credentials.",
            playstoreTitle: "MastoLand for Android",
            playstoreDesc: "Direct and secure installation from the official Google store. Compatible with Android 13.0 (API 33) or higher. Receive automatic security and performance updates immediately.",
            playstoreBtn: "Available on Google Play",
            footerBrandDesc: "A native Mastodon client for Android, fast, fluid, and modular. Developed with the user and their privacy in mind.",
            footerNavTitle: "Navigation",
            footerLegalTitle: "Legal",
            footerDeletionLink: "Data Deletion",
            footerContactTitle: "Contact",
            footerSupportLink: "Technical Support",
            footerCopyright: "&copy; 2026 MastoLand. Developed by José Rodolfo De La Torre. All rights reserved."
        },
        de: {
            title: "MastoLand - Nativer Mastodon-Client für Android",
            metaDesc: "MastoLand ist ein nativer, schneller und erstklassiger Mastodon-Client für Android. Entwickelt mit Jetpack Compose, mit modernem Design, sicherer Google Drive-Synchronisierung und 100 % Datenschutz.",
            home: "Startseite",
            features: "Funktionen",
            security: "Sicherheit",
            download: "Download",
            privacy: "Datenschutz",
            navDownload: "Herunterladen",
            heroBadge: "Premium Mastodon-Client",
            heroTitle: "Das Fediverse in Ihrer Handfläche, <span class=\"gradient-text\">schnell und nativ</span>.",
            heroDesc: "MastoLand definiert Ihr Mastodon-Erlebnis neu. Eine saubere Benutzeroberfläche, die zu 100 % mit Jetpack Compose für Android entwickelt wurde, bietet Geschwindigkeit, Anpassung und absolute Kontrolle über Ihre Privatsphäre.",
            heroPlaystore: "Auf Google Play laden",
            heroFeatures: "Funktionen erkunden",
            statSpeed: "Flüssige UI",
            statPrivacy: "Privat",
            statSdk: "Android 13+",
            featSubtitle: "Hauptfunktionen",
            featTitle: "Auf Geschwindigkeit ausgelegt, <span class=\"gradient-text\">unter Wahrung Ihrer Privatsphäre</span>.",
            featDesc: "MastoLand entfernt Zwischenhändler aus Ihrem sozialen Erlebnis. Eine direkte Verbindung zum Fediverse unter einer Benutzeroberfläche, die begeistert.",
            feat1Title: "100 % dezentralisiert und privat",
            feat1Desc: "MastoLand hat keine zentralen Server oder Datenbanken. Ihre Zugriffstoken werden sicher lokal auf Ihrem Gerät gespeichert. Keine versteckte Telemetrie oder Werbung.",
            feat2Title: "Saubere und modulare Architektur",
            feat2Desc: "Entwickelt unter strengen Modularisierungsmustern (SRP) in Jetpack Compose. Strikte Trennung von Daten- und Präsentationsschichten für eine optimale und inkrementelle Leistung.",
            feat3Title: "Intelligente Multimedia-Leistung",
            feat3Desc: "Hyperschnelles Laden und Anzeigen von Fotos, Avataren, GIFs und Videos, optimiert mit Coil und einem erweiterten lokalen Cache. Genießen Sie das Netzwerk, ohne unnötige Daten zu verbrauchen.",
            feat4Title: "Multi-Account-Verwaltung",
            feat4Desc: "Verwalten Sie mehrere Profile auf verschiedenen Mastodon-Instanzen gleichzeitig mit schnellen und unabhängigen Übergängen, ohne den Überblick über Ihre Benachrichtigungen zu verlieren.",
            secSubtitle: "Proaktive Sicherheit",
            secTitle: "Cloud-Backups, <span class=\"gradient-text\">sicher und resistent gegen Latenz</span>.",
            secDesc: "Unsere reaktive Google Drive-Synchronisationsarchitektur sorgt dafür, dass Sie Ihre Einstellungen nie auf sichere Weise verlieren.",
            gdriveTitle: "Google Drive-Synchronisierung",
            gdriveSubtitle: "Ende-zu-Ende-Verschlüsselung",
            gdriveDate: "Datum: Heute, 07:45 Uhr",
            gdriveStatus: "Aktiv",
            gdriveFooter: "🔒 Verschlüsselungsschlüssel lokal mit Android Keystore generiert.",
            secItem1: "<strong>Nachhaltige reaktive Synchronisierung:</strong> Kein Hintergrundverbrauch. Backups werden nur durch direkte Aktionen (wie das Ändern von Einstellungen oder das Hinzufügen eines Kontos) ausgelöst.",
            secItem2: "<strong>Anti-Phantom-Response-Architektur:</strong> Jede Backup-Datei verwendet einen dynamischen Zeitstempel, um die eventuelle Konsistenz der Drive-API zu umgehen.",
            secItem3: "<strong>Payload Safe-Guard-Filter:</strong> Strikte Überprüfung vor der Verschlüsselung. Wenn ein Designschlüssel oder eine wesentliche Einstellung fehlt, wird das Backup abgebrochen, um die Integrität zu schützen.",
            downTitle: "Treten Sie dem Fediverse mit MastoLand bei",
            downDesc: "Laden Sie die offizielle App von Google Play herunter und melden Sie sich sicher und direkt mit Ihren Mastodon-Zugangsdaten an.",
            playstoreTitle: "MastoLand für Android",
            playstoreDesc: "Direkte und sichere Installation aus dem offiziellen Google Store. Kompatibel mit Android 13.0 (API 33) oder höher. Erhalten Sie sofort automatische Sicherheits- und Leistungsupdates.",
            playstoreBtn: "Auf Google Play verfügbar",
            footerBrandDesc: "Ein nativer Mastodon-Client für Android, schnell, flüssig und modular. Entwickelt mit Blick auf den Benutzer und seine Privatsphäre.",
            footerNavTitle: "Navigation",
            footerLegalTitle: "Rechtliches",
            footerDeletionLink: "Datenlöschung",
            footerContactTitle: "Kontakt",
            footerSupportLink: "Technischer Support",
            footerCopyright: "&copy; 2026 MastoLand. Entwickelt von Geschäftspartner José Rodolfo De La Torre. Alle Rechte vorbehalten."
        },
        fr: {
            title: "MastoLand - Client Mastodon Natif pour Android",
            metaDesc: "MastoLand est un client Mastodon natif, rapide et premium pour Android. Développé avec Jetpack Compose, avec un design moderne, une synchronisation sécurisée avec Google Drive et 100% de confidentialité.",
            home: "Accueil",
            features: "Fonctionnalités",
            security: "Sécurité",
            download: "Télécharger",
            privacy: "Confidentialité",
            navDownload: "Télécharger",
            heroBadge: "Client Mastodon Premium",
            heroTitle: "Le Fediverse dans la paume de votre main, <span class=\"gradient-text\">rapide et natif</span>.",
            heroDesc: "MastoLand redéfinit votre expérience Mastodon. Une interface propre développée à 100% avec Jetpack Compose pour Android qui offre vitesse, personnalisation et contrôle absolu sur votre vie privée.",
            heroPlaystore: "Obtenir sur Google Play",
            heroFeatures: "Explorer les fonctionnalités",
            statSpeed: "Interface Fluide",
            statPrivacy: "Privé",
            statSdk: "Android 13+",
            featSubtitle: "Caractéristiques principales",
            featTitle: "Conçu pour la vitesse, <span class=\"gradient-text\">tout en respectant votre vie privée</span>.",
            featDesc: "MastoLand élimine les intermédiaires de votre expérience sociale. Une connexion directe avec le Fediverse sous une interface utilisateur qui ravit.",
            feat1Title: "100% décentralisé et privé",
            feat1Desc: "MastoLand n\'a ni serveur ni base de données centrale. Vos jetons d\'accès sont enregistrés localement en toute sécurité sur votre appareil. Pas de télémétrie cachée ni de publicité.",
            feat2Title: "Architecture propre et modulaire",
            feat2Desc: "Construit selon des modèles de modularisation stricts (SRP) dans Jetpack Compose. Séparation rigoureuse des couches de données et de présentation pour des performances optimales et progressives.",
            feat3Title: "Performances multimédias intelligentes",
            feat3Desc: "Chargement et affichage hyper rapides de photos, d\'avatars, de GIF et de vidéos optimisés avec Coil et une mise en cache locale avancée. Profitez du réseau sans consommer de données inutiles.",
            feat4Title: "Gestion multi-comptes",
            feat4Desc: "Gérez simultanément plusieurs profils sur différentes instances de Mastodon avec des transitions rapides et indépendantes sans perdre le fil de vos notifications.",
            secSubtitle: "Sécurité proactive",
            secTitle: "Sauvegardes dans le cloud, <span class=\"gradient-text\">sécurisées et insensibles à la latence</span>.",
            secDesc: "Notre architecture de synchronisation réactive avec Google Drive est conçue pour que vous ne perdiez jamais vos préférences de manière sécurisée.",
            gdriveTitle: "Synchro Google Drive",
            gdriveSubtitle: "Chiffrement de bout en bout",
            gdriveDate: "Date : Aujourd\'hui, 07:45 AM",
            gdriveStatus: "Actif",
            gdriveFooter: "🔒 Clés de chiffrement générées localmente à l\'aide d\'Android Keystore.",
            secItem1: "<strong>Synchronisation réactive durable :</strong> Zéro consommation en arrière-plan. Les sauvegardes ne sont déclenchées que par des actions directes (comme changer de préférences ou ajouter un compte).",
            secItem2: "<strong>Architecture contre les réponses fantômes :</strong> Chaque fichier de sauvegarde utilise un horodatage dynamique pour contourner la cohérence éventuelle de l\'API Drive.",
            secItem3: "<strong>Filtro Safe-Guard de Payload :</strong> Vérification rigoureuse pré-chiffrement. Si une clé de conception ou une préférence essentielle est manquante, la sauvegarde est annulée pour protéger l\'intégrité.",
            downTitle: "Rejoignez le Fediverse avec MastoLand",
            downDesc: "Téléchargez l\'application officielle sur Google Play et connectez-vous en toute sécurité et directement avec vos identifiants Mastodon.",
            playstoreTitle: "MastoLand pour Android",
            playstoreDesc: "Installation directe et sécurisée depuis la boutique officielle de Google. Compatible avec Android 13.0 (API 33) ou version ultérieure. Recevez immédiatement les mises à jour automatiques de sécurité et de performances.",
            playstoreBtn: "Disponible sur Google Play",
            footerBrandDesc: "Un client Mastodon natif pour Android, rapide, fluide et modulaire. Développé en pensant à l\'utilisateur et à sa vie privée.",
            footerNavTitle: "Navigation",
            footerLegalTitle: "Mentions légales",
            footerDeletionLink: "Suppression de données",
            footerContactTitle: "Contact",
            footerSupportLink: "Support Technique",
            footerCopyright: "&copy; 2026 MastoLand. Développé par José Rodolfo De La Torre. Tous droits réservés."
        },
        ja: {
            title: "MastoLand - Android向けネイティブMastodonクライアント",
            metaDesc: "MastoLandは、Android向けの高速でプレミアムなネイティブMastodonクライアントです。Jetpack Composeで開発され、モダンなデザイン、Googleドライブとの安全な同期、退屈な待ち時間なしの100%のプライバシーを提供します。",
            home: "ホーム",
            features: "特徴",
            security: "セキュリティ",
            download: "ダウンロード",
            privacy: "プライバシー",
            navDownload: "ダウンロード",
            heroBadge: "プレミアムMastodonクライアント",
            heroTitle: "手のひらの上のフェディバース、<span class=\"gradient-text\">高速かつネイティブ</span>。",
            heroDesc: "MastoLandはあなたのMastodon体験を再定義します。Android向けにJetpack Composeで100%開発されたクリーンなUIは、速度、カスタマイズ性、そしてプライバシーの完全な制御を提供します。",
            heroPlaystore: "Google Play で手に入れよう",
            heroFeatures: "機能を見る",
            statSpeed: "滑らかなUI",
            statPrivacy: "プライベート",
            statSdk: "Android 13以上",
            featSubtitle: "主な機能",
            featTitle: "速度重視設計、<span class=\"gradient-text\">プライバシーを尊重</span>。",
            featDesc: "MastoLandはあなたのソーシャル体験から仲介者を取り除きます。美しいUIによるフェディバースへの直接接続。",
            feat1Title: "100%分散型＆プライベート",
            feat1Desc: "MastoLandには中央サーバーやデータベースはありません。アクセストークンはデバイス内にローカルかつ安全に保存されます。隠されたテレメトリや広告はありません。",
            feat2Title: "クリーン＆モジュラーアーキテクチャ",
            feat2Desc: "Jetpack Composeによる厳格なモジュール化パターン（SRP）に基づいて構築されています。データ層とプレゼンテーション層を厳密に分離しています。",
            feat3Title: "スマートマルチメディアパフォーマンス",
            feat3Desc: "Coilと高度なローカルキャッシュにより最適化された、写真、アバター、GIF、ビデオの超高速読み込みと表示。無駄なデータ通信を行わずにネットワークを楽しめます。",
            feat4Title: "マルチアカウント管理",
            feat4Desc: "異なるMastodonインスタンスの複数のプロフィールを同時に管理でき、通知を見失うことなく、迅速かつ独立した切り替えが可能です。",
            secSubtitle: "プロアクティブセキュリティ",
            secTitle: "クラウドバックアップ、<span class=\"gradient-text\">安全で遅延の影響を受けない</span>。",
            secDesc: "Googleドライブとのリアクティブな同期アーキテクチャにより、設定を安全に維持し、紛失を防ぎます。",
            gdriveTitle: "Google ドライブ同期",
            gdriveSubtitle: "エンドツーエンド暗号化",
            gdriveDate: "日付: 今日, 07:45 AM",
            gdriveStatus: "有効",
            gdriveFooter: "🔒 暗号化キーはAndroid Keystoreを使用してローカルで生成されます。",
            secItem1: "<strong>持続可能なリアクティブ同期:</strong> バックグラウンドでの消費電力ゼロ。バックアップは、設定変更やアカウント追加などの直接的な操作によってのみ実行されます。",
            secItem2: "<strong>アンチファントムレスポンスアーキテクチャ:</strong> 各バックアップファイルは動的なタイムスタンプを使用して、Drive APIの結果整合性を回避します。",
            secItem3: "<strong>ペイロードセーフガードフィルター:</strong> 暗号化前の厳格な検証。デザインキーや重要な設定が欠落している場合、整合性を保護するためにバックアップはキャンセルされます。",
            downTitle: "MastoLandでフェディバースに参加しよう",
            downDesc: "Google Playから公式アプリをダウンロードし、Mastodonの資格情報を使用して安全かつ直接ログインします。",
            playstoreTitle: "Android向けMastoLand",
            playstoreDesc: "公式Googleストアから直接かつ安全にインストール。Android 13.0（API 33）以上に対応。自動セキュリティアップデートとパフォーマンス向上を即座に受信します。",
            playstoreBtn: "Google Play で入手可能",
            footerBrandDesc: "Android向けの高速、スムーズ、そしてモジュラーなネイティブMastodonクライアント。ユーザーとプライバシーを第一に考えて開発されました。",
            footerNavTitle: "ナビゲーション",
            footerLegalTitle: "規約・ポリシー",
            footerDeletionLink: "データの削除",
            footerContactTitle: "お問い合わせ",
            footerSupportLink: "テクニカルサポート",
            footerCopyright: "&copy; 2026 MastoLand. Developed by José Rodolfo De La Torre. All rights reserved."
        },
        pt: {
            title: "MastoLand - Cliente Mastodon Nativo para Android",
            metaDesc: "MastoLand é um cliente Mastodon nativo, rápido e premium para Android. Desenvolvido com Jetpack Compose, com design moderno, sincronização segura com Google Drive e 100% de privacidade.",
            home: "Início",
            features: "Características",
            security: "Segurança",
            download: "Download",
            privacy: "Privacidade",
            navDownload: "Baixar",
            heroBadge: "Cliente Premium de Mastodon",
            heroTitle: "O Fediverso na palma da sua mão, <span class=\"gradient-text\">rápido e nativo</span>.",
            heroDesc: "O MastoLand redefine a sua experiência no Mastodon. Uma interface limpa desenvolvida 100% com Jetpack Compose para Android que oferece velocidade, personalização e um controle absoluto sobre a sua privacidade.",
            heroPlaystore: "Disponível no Google Play",
            heroFeatures: "Explorar Recursos",
            statSpeed: "Interface Fluida",
            statPrivacy: "Privado",
            statSdk: "Android 13+",
            featSubtitle: "Recursos Principais",
            featTitle: "Projetado para velocidade, <span class=\"gradient-text\">respeitando a sua privacidade</span>.",
            featDesc: "O MastoLand elimina intermediários da sua experiência social. Uma conexão direta com o Fediverso sob uma interface que encanta.",
            feat1Title: "100% Descentralizado e Privado",
            feat1Desc: "O MastoLand não possui servidores ou bancos de dados centrais. Seus tokens de acesso são salvos localmente no seu dispositivo de forma segura. Sem telemetria oculta ou anúncios.",
            feat2Title: "Arquitetura Limpa e Modular",
            feat2Desc: "Construído sob padrões rígidos de modularização (SRP) no Jetpack Compose. Separação rigorosa das camadas de dados e apresentação para um desempenho ideal e incremental.",
            feat3Title: "Desempenho de Mídia Inteligente",
            feat3Desc: "Carregamento e exibição hiper-rápidos de fotos, avatares, GIFs e vídeos otimizados com Coil e um cache local avançado. Aproveite a rede sem consumir dados desnecessários.",
            feat4Title: "Gerenciamento Multi-contas",
            feat4Desc: "Gerencie vários perfis em diferentes instâncias do Mastodon simultaneamente com transições rápidas e independentes, sem perder o controle de suas notificações.",
            secSubtitle: "Segurança Proativa",
            secTitle: "Backups na nuvem, <span class=\"gradient-text\">seguros e imunes à latência</span>.",
            secDesc: "Nossa arquitetura de sincronização reativa com o Google Drive foi projetada para que você nunca perca suas preferências de forma segura.",
            gdriveTitle: "Sincronização Google Drive",
            gdriveSubtitle: "Criptografia de ponta a ponta",
            gdriveDate: "Data: Hoje, 07:45 AM",
            gdriveStatus: "Ativo",
            gdriveFooter: "🔒 Chaves de criptografia geradas localmente usando o Android Keystore.",
            secItem1: "<strong>Sincronização Reativa Sustentável:</strong> Zero consumo em segundo plano. Os backups só são acionados por ações diretas (como alteração de preferências ou adição de conta).",
            secItem2: "<strong>Arquitetura Contra Respostas Fantasma:</strong> Cada arquivo de backup usa um timestamp dinâmico para contornar a consistência eventual da API do Drive.",
            secItem3: "<strong>Filtro Safe-Guard de Payload:</strong> Verificação rigorosa pré-criptografia. Se alguma chave de design ou preferência essencial estiver faltando, o backup será cancelado para proteger a integridade.",
            downTitle: "Junte-se ao Fediverso com o MastoLand",
            downDesc: "Baixe o aplicativo oficial do Google Play e faça login de forma segura e direta com suas credenciais do Mastodon.",
            playstoreTitle: "MastoLand para Android",
            playstoreDesc: "Instalação direta e segura a partir da loja oficial do Google. Compatível com Android 13.0 (API 33) ou superior. Receba atualizações automáticas de segurança e desempenho imediatamente.",
            playstoreBtn: "Disponível no Google Play",
            footerBrandDesc: "Um cliente Mastodon nativo para Android, rápido, fluido e modular. Desenvolvido pensando no usuário e na sua privacidade.",
            footerNavTitle: "Navegação",
            footerLegalTitle: "Legal",
            footerDeletionLink: "Exclusão de Dados",
            footerContactTitle: "Contato",
            footerSupportLink: "Suporte Técnico",
            footerCopyright: "&copy; 2026 MastoLand. Desenvolvido por José Rodolfo De La Torre. Todos os direitos reservados."
        }
    };

    const translatePage = (lang) => {
        const dict = translations[lang] || translations.en;
        
        // Document Head metadata
        document.title = dict.title;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', dict.metaDesc);
        document.documentElement.lang = lang;
        
        // Elements Mapping
        const elementsMapping = {
            'link-home': dict.home,
            'footer-link-home': dict.home,
            'link-features': dict.features,
            'footer-link-features': dict.features,
            'link-security': dict.security,
            'footer-link-security': dict.security,
            'link-download': dict.download,
            'footer-link-download': dict.download,
            'link-privacy': dict.privacy,
            'footer-privacy-link': dict.privacy,
            'nav-download-btn': dict.navDownload,
            'hero-badge': dict.heroBadge,
            'hero-title': dict.heroTitle,
            'hero-description': dict.heroDesc,
            'hero-primary-cta-text': dict.heroPlaystore,
            'hero-secondary-cta': dict.heroFeatures,
            'lbl-stat-speed': dict.statSpeed,
            'lbl-stat-privacy': dict.statPrivacy,
            'lbl-stat-sdk': dict.statSdk,
            'features-subtitle': dict.featSubtitle,
            'features-title': dict.featTitle,
            'features-desc': dict.featDesc,
            'feat-1-title': dict.feat1Title,
            'feat-1-desc': dict.feat1Desc,
            'feat-2-title': dict.feat2Title,
            'feat-2-desc': dict.feat2Desc,
            'feat-3-title': dict.feat3Title,
            'feat-3-desc': dict.feat3Desc,
            'feat-4-title': dict.feat4Title,
            'feat-4-desc': dict.feat4Desc,
            'security-subtitle': dict.secSubtitle,
            'security-title': dict.secTitle,
            'security-desc': dict.secDesc,
            'gdrive-lbl-title': dict.gdriveTitle,
            'gdrive-lbl-subtitle': dict.gdriveSubtitle,
            'gdrive-lbl-date': dict.gdriveDate,
            'gdrive-lbl-status': dict.gdriveStatus,
            'gdrive-lbl-footer': dict.gdriveFooter,
            'sec-item-1': dict.secItem1,
            'sec-item-2': dict.secItem2,
            'sec-item-3': dict.secItem3,
            'download-title': dict.downTitle,
            'download-desc': dict.downDesc,
            'playstore-box-title': dict.playstoreTitle,
            'playstore-box-desc': dict.playstoreDesc,
            'btn-download-playstore-text': dict.playstoreBtn,
            'footer-brand-desc': dict.footerBrandDesc,
            'footer-nav-title': dict.footerNavTitle,
            'footer-legal-title': dict.footerLegalTitle,
            'footer-deletion-link': dict.footerDeletionLink,
            'footer-contact-title': dict.footerContactTitle,
            'footer-support-link': dict.footerSupportLink,
            'footer-copyright': dict.footerCopyright
        };
        
        Object.entries(elementsMapping).forEach(([id, text]) => {
            const el = document.getElementById(id);
            if (el) {
                if (text.includes('<')) {
                    el.innerHTML = text;
                } else {
                    el.textContent = text;
                }
            }
        });

        // Update active class in dropdown options
        document.querySelectorAll('.lang-option').forEach(opt => {
            if (opt.getAttribute('data-lang') === lang) {
                opt.classList.add('active');
            } else {
                opt.classList.remove('active');
            }
        });

        // Update the current language button text
        const currentLangCode = document.getElementById('current-lang-code');
        if (currentLangCode) {
            currentLangCode.textContent = lang.toUpperCase();
        }
    };

    const setLanguage = (lang) => {
        translatePage(lang);
        localStorage.setItem('mastoland-lang', lang);
    };

    const initLanguage = () => {
        let savedLang = localStorage.getItem('mastoland-lang');
        if (!savedLang) {
            const browserLang = navigator.language || navigator.userLanguage || 'en';
            const shortLang = browserLang.split('-')[0].toLowerCase();
            const supportedLangs = ['es', 'en', 'de', 'fr', 'ja', 'pt'];
            savedLang = supportedLangs.includes(shortLang) ? shortLang : 'en';
        }
        setLanguage(savedLang);
    };

    // Toggle language dropdown
    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('show');
        });
    }

    // Language option click events
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', (e) => {
            const lang = e.target.getAttribute('data-lang');
            setLanguage(lang);
            langDropdown.classList.remove('show');
        });
    });

    // Close language dropdown when clicking outside
    document.addEventListener('click', () => {
        if (langDropdown && langDropdown.classList.contains('show')) {
            langDropdown.classList.remove('show');
        }
    });

    // Mobile Navigation Toggle
    menuToggleBtn.addEventListener('click', () => {
        menuToggleBtn.classList.toggle('active');
        navigationMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggleBtn.classList.remove('active');
            navigationMenu.classList.remove('active');
        });
    });

    // Reset active state to Home (Inicio) if at the top of the page
    const checkScrollTop = () => {
        if (window.scrollY <= 10) {
            navLinks.forEach(link => {
                if (link.getAttribute('href') === '#hero') {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    };

    // Scroll Effects (Header Shrink)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        checkScrollTop();
    });

    // Navigation Link Active Highlighting via Intersection Observer
    const sections = document.querySelectorAll('section, header');
    const observerOptions = {
        root: null,
        rootMargin: '-30% 0px -60% 0px', // Trigger near screen center
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        // If at the top of the page, force "Inicio" active and skip observer highlighting
        if (window.scrollY <= 10) {
            checkScrollTop();
            return;
        }

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    // Get link anchor target
                    const href = link.getAttribute('href');
                    if (href === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        if (section.id) {
            sectionObserver.observe(section);
        }
    });

    // Initialize Settings
    checkScrollTop();
    initTheme();
    initAccent();
    initLanguage();
});
