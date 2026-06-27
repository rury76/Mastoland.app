/**
 * MastoLand Privacy Page Script
 * Localizes privacy.html to ES, EN, DE, FR, JA, PT.
 */

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const langBtn = document.getElementById('lang-btn');
    const langDropdown = document.getElementById('lang-dropdown');

    const translations = {
        es: {
            backBtn: "Regresar al inicio",
            title: "Política de Privacidad y Eliminación de Datos - MastoLand",
            heading: "Política de Privacidad y Eliminación de Datos",
            metaApp: "<strong>Aplicación:</strong> MastoLand",
            metaDate: "<strong>Última actualización:</strong> Junio de 2026",
            metaAuthor: "<strong>Desarrollador:</strong> José Rodolfo De La Torre",
            metaContact: "<strong>Contacto:</strong> rury76@gmail.com",
            intro: "En <strong>MastoLand</strong>, nos tomamos muy en serio la privacidad de nuestros usuarios. Esta Política de Privacidad explica de manera transparente cómo se manejan, transmiten y eliminan los datos en nuestra aplicación móvil (Android) y de escritorio (macOS).",
            sec1Title: "1. Naturaleza del Servicio (Aplicación de Terceros)",
            sec1p1: "MastoLand es un cliente nativo de código abierto para la red social descentralizada y federada <strong>Mastodon</strong>. MastoLand <strong>no cuenta con servidores propios, bases de datos centralizadas ni sistemas de almacenamiento en la nube administrados por el desarrollador</strong>.",
            sec1p2: "Toda la infraestructura de la red social (registro de usuarios, almacenamiento de publicaciones, imágenes, videos y moderación de contenido) depende exclusivamente de la instancia o servidor del Fediverso en el que el usuario haya decidido registrarse de forma independiente (por ejemplo, <em>mastodon.social</em> u otros servidores públicos).",
            sec2Title: "2. Recopilación y Uso de Datos",
            sec2aTitle: "A. Datos de Autenticación",
            sec2ap: "Para acceder a la red, la aplicación utiliza el protocolo seguro <strong>OAuth</strong>. El usuario introduce sus credenciales directamente en la pasarela web de su respectiva instancia. MastoLand solo recibe y almacena de forma local y segura un token de acceso en el dispositivo para mantener la sesión abierta. <strong>Las contraseñas nunca son vistas, procesadas ni almacenadas por el desarrollador.</strong>",
            sec2bTitle: "B. Contenido Multimedia (Fotos y Videos)",
            sec2bli1: "<strong>Recopilación en tránsito:</strong> Cuando el usuario decide redactar una nueva publicación o responder a un hilo e incluye imágenes o videos de su galería, MastoLand procesa dichos archivos con el único propósito de transmitirlos mediante conexiones seguras (HTTPS) a la API del servidor de Mastodon del usuario.",
            sec2bli2: "<strong>Finalidad:</strong> Estos archivos se recopilan exclusivamente para la <strong>Funcionalidad de la app</strong> (permitir al usuario compartir contenido multimedia en su Timeline). No se utilizan para publicidad, analíticas ni personalización de perfiles.",
            sec3Title: "3. Seguridad de los Datos",
            sec3p: "Todos los datos transmitidos por MastoLand hacia el Fediverso se encriptan obligatoriamente en tránsito utilizando el protocolo de seguridad <strong>HTTPS (TLS)</strong>, impidiendo que terceros puedan interceptar la información del usuario o sus archivos multimedia.",
            sec4Title: "4. Política de Eliminación de Datos (Data Deletion)",
            sec4p: "En cumplimiento con las directrices de seguridad de las tiendas de aplicaciones Google Play y Apple App Store, garantizamos que los usuarios tienen el control absoluto sobre la eliminación de sus datos a través de dos mecanismos:",
            sec4aTitle: "A. Eliminación de Datos Locales (En el Dispositivo)",
            sec4ap: "El usuario puede solicitar la eliminación inmediata de todos los datos almacenados localmente por la aplicación (tokens de acceso, cachés temporales y base de datos local de Room) realizando cualquiera de las siguientes acciones:",
            sec4ali1: "Ir al menú de configuración dentro de MastoLand y pulsar en <strong>\"Cerrar Sesión\"</strong>.",
            sec4ali2: "Desinstalar la aplicación del dispositivo o borrar los datos de almacenamiento desde los Ajustes del Sistema Operativo (Android/macOS).",
            sec4bTitle: "B. Eliminación de Datos en la Red (En el Servidor o Instancia)",
            sec4bp: "Dado que las publicaciones, imágenes, videos e información del perfil residen en los servidores descentralizados de Mastodon y no bajo el control directo de MastoLand:",
            sec4bli1: "El usuario puede borrar publicaciones individuales de forma directa desde la interfaz de la aplicación, lo que disparará de inmediato la orden de eliminación a la API del servidor federado.",
            sec4bli2: "Para una eliminación definitiva de la cuenta y de todo el historial multimedia asociado en el Fediverso, el usuario debe acceder de forma externa al panel web de la instancia de Mastodon donde se registró originalmente y solicitar la baja definitiva desde la configuración de su perfil.",
            sec5Title: "5. Cambios a esta Política",
            sec5p: "Nos reservamos el derecho de actualizar esta política para reflejar cambios tecnológicos o normativos en las tiendas de aplicaciones. Se recomienda revisar esta página periódicamente."
        },
        en: {
            backBtn: "Back to Home",
            title: "Privacy Policy & Data Deletion - MastoLand",
            heading: "Privacy Policy & Data Deletion",
            metaApp: "<strong>Application:</strong> MastoLand",
            metaDate: "<strong>Last updated:</strong> June 2026",
            metaAuthor: "<strong>Developer:</strong> José Rodolfo De La Torre",
            metaContact: "<strong>Contact:</strong> rury76@gmail.com",
            intro: "At <strong>MastoLand</strong>, we take our users' privacy very seriously. This Privacy Policy transparently explains how data is handled, transmitted, and deleted in our mobile (Android) and desktop (macOS) application.",
            sec1Title: "1. Nature of the Service (Third-Party Application)",
            sec1p1: "MastoLand is a native, open-source client for the decentralized and federated social network <strong>Mastodon</strong>. MastoLand <strong>does not have its own servers, centralized databases, or cloud storage systems managed by the developer</strong>.",
            sec1p2: "All infrastructure of the social network (user registration, storage of posts, images, videos, and content moderation) depends exclusively on the Fediverse instance or server where the user independently decided to register (for example, <em>mastodon.social</em> or other public servers).",
            sec2Title: "2. Data Collection and Use",
            sec2aTitle: "A. Authentication Data",
            sec2ap: "To access the network, the application uses the secure <strong>OAuth</strong> protocol. The user enters their credentials directly into the web gateway of their respective instance. MastoLand only receives and securely stores an access token locally on the device to keep the session open. <strong>Passwords are never seen, processed, or stored by the developer.</strong>",
            sec2bTitle: "B. Multimedia Content (Photos and Videos)",
            sec2bli1: "<strong>Collection in transit:</strong> When the user decides to draft a new post or reply to a thread and includes images or videos from their gallery, MastoLand processes these files for the sole purpose of transmitting them via secure connections (HTTPS) to the user's Mastodon server API.",
            sec2bli2: "<strong>Purpose:</strong> These files are collected exclusively for the <strong>App Functionality</strong> (allowing the user to share multimedia content on their Timeline). They are not used for advertising, analytics, or profile personalization.",
            sec3Title: "3. Data Security",
            sec3p: "All data transmitted by MastoLand to the Fediverse is encrypted in transit using the <strong>HTTPS (TLS)</strong> security protocol, preventing third parties from intercepting user information or multimedia files.",
            sec4Title: "4. Data Deletion Policy",
            sec4p: "In compliance with the security guidelines of the Google Play and Apple App Store application stores, we guarantee that users have absolute control over the deletion of their data through two mechanisms:",
            sec4aTitle: "A. Local Data Deletion (On the Device)",
            sec4ap: "The user can request the immediate deletion of all data locally stored by the application (access tokens, temporary caches, and local Room database) by performing any of the following actions:",
            sec4ali1: "Go to the settings menu inside MastoLand and click on <strong>\"Log Out\"</strong>.",
            sec4ali2: "Uninstall the application from the device or clear storage data from the Operating System Settings (Android/macOS).",
            sec4bTitle: "B. Network Data Deletion (On the Server or Instance)",
            sec4bp: "Since posts, images, videos, and profile information reside on the decentralized Mastodon servers and not under the direct control of MastoLand:",
            sec4bli1: "The user can delete individual posts directly from the application interface, which will immediately trigger the deletion command to the federated server API.",
            sec4bli2: "For permanent deletion of the account and all associated multimedia history in the Fediverse, the user must externally access the web panel of the Mastodon instance where they originally registered and request permanent termination from their profile settings.",
            sec5Title: "5. Changes to this Policy",
            sec5p: "We reserve the right to update this policy to reflect technological or regulatory changes in the application stores. It is recommended to review this page periodically."
        },
        de: {
            backBtn: "Zurück Startseite",
            title: "Datenschutzerklärung & Datenlöschung - MastoLand",
            heading: "Datenschutzerklärung und Datenlöschung",
            metaApp: "<strong>Anwendung:</strong> MastoLand",
            metaDate: "<strong>Letzte Aktualisierung:</strong> Juni 2026",
            metaAuthor: "<strong>Entwickler:</strong> José Rodolfo De La Torre",
            metaContact: "<strong>Kontakt:</strong> rury76@gmail.com",
            intro: "Bei <strong>MastoLand</strong> nehmen wir den Schutz der Privatsphäre unserer Nutzer sehr ernst. Diese Datenschutzerklärung erläutert transparent, wie Daten in unserer mobilen (Android) und Desktop-Anwendung (macOS) verarbeitet, übertragen und gelöscht werden.",
            sec1Title: "1. Natur des Dienstes (Drittanbieter-Anwendung)",
            sec1p1: "MastoLand ist ein nativer Open-Source-Client für das dezentrale und föderierte soziale Netzwerk <strong>Mastodon</strong>. MastoLand <strong>verfügt über keine eigenen Server, zentralisierten Datenbanken oder Cloud-Speichersysteme, die vom Entwickler verwaltet werden</strong>.",
            sec1p2: "Die gesamte Infrastruktur des sozialen Netzwerks (Registrierung von Nutzern, Speicherung von Beiträgen, Bildern, Videos und Inhaltsmoderation) hängt ausschließlich von der Instanz oder dem Server des Fediverse ab, auf dem sich der Nutzer unabhängig registriert hat (z. B. <em>mastodon.social</em> oder andere öffentliche Server).",
            sec2Title: "2. Datenerhebung und -verwendung",
            sec2aTitle: "A. Authentifizierungsdaten",
            sec2ap: "Für den Zugriff auf das Netzwerk verwendet die Anwendung das sichere Protokoll <strong>OAuth</strong>. Der Nutzer gibt seine Zugangsdaten direkt im Web-Gateway seiner jeweiligen Instanz ein. MastoLand empfängt und speichert lediglich ein Zugriffstoken lokal und sicher auf dem Gerät, um die Sitzung geöffnet zu halten. <strong>Passwörter werden vom Entwickler niemals eingesehen, verarbeitet oder gespeichert.</strong>",
            sec2bTitle: "B. Multimedia-Inhalte (Fotos und Videos)",
            sec2bli1: "<strong>Erfassung bei der Übertragung:</strong> Wenn sich der Nutzer entscheidet, einen neuen Beitrag zu verfassen oder auf einen Thread zu antworten und Bilder oder Videos aus seiner Galerie hinzufügt, verarbeitet MastoLand diese Dateien ausschließlich zum Zweck der Übertragung über sichere Verbindungen (HTTPS) an die API des Mastodon-Servers des Nutzers.",
            sec2bli2: "<strong>Zweck:</strong> Diese Dateien werden ausschließlich für die <strong>App-Funktionalität</strong> erfasst (damit der Nutzer Multimedia-Inhalte in seiner Timeline teilen kann). Sie werden nicht für Werbung, Analysen oder die Personalisierung von Profilen verwendet.",
            sec3Title: "3. Datensicherheit",
            sec3p: "Alle von MastoLand an das Fediverse übertragenen Daten werden bei der Übertragung zwingend mit dem Sicherheitsprotokoll <strong>HTTPS (TLS)</strong> verschlüsselt, um zu verhindern, dass Dritte Nutzerinformationen oder Mediendateien abfangen.",
            sec4Title: "4. Richtlinie zur Datenlöschung (Data Deletion)",
            sec4p: "In Übereinstimmung mit den Sicherheitsrichtlinien der App-Stores Google Play und Apple App Store garantieren wir, dass Nutzer die absolute Kontrolle über die Löschung ihrer Daten durch zwei Mechanismen haben:",
            sec4aTitle: "A. Lokale Datenlöschung (Auf dem Gerät)",
            sec4ap: "Der Nutzer kann die sofortige Löschung aller von der Anwendung lokal gespeicherten Daten (Zugriffstoken, temporäre Caches und lokale Room-Datenbank) beantragen, indem er eine der folgenden Aktionen ausführt:",
            sec4ali1: "Rufen Sie das Einstellungsmenü in MastoLand auf und tippen Sie auf <strong>\"Abmelden\"</strong>.",
            sec4ali2: "Deinstallieren Sie die App vom Gerät oder löschen Sie die Speicherdaten in den Einstellungen des Betriebssystems (Android/macOS).",
            sec4bTitle: "B. Datenlöschung im Netzwerk (Auf dem Server oder der Instanz)",
            sec4bp: "Da Beiträge, Bilder, Videos und Profilinformationen auf den dezentralen Mastodon-Servern liegen und nicht der direkten Kontrolle von MastoLand unterliegen:",
            sec4bli1: "Der Nutzer kann einzelne Beiträge direkt über die App-Oberfläche löschen, was sofort den Löschbefehl an die API des föderierten Servers auslöst.",
            sec4bli2: "Für eine dauerhafte Löschung des Kontos und des gesamten damit verbundenen Multimedia-Verlaufs im Fediverse muss der Nutzer extern auf das Web-Panel der Mastodon-Instanz zugreifen, auf der er sich ursprünglich registriert hat, und die endgültige Löschung in seinen Profileinstellungen beantragen.",
            sec5Title: "5. Änderungen an dieser Richtlinie",
            sec5p: "Wir behalten uns das Gesetz vor, diese Richtlinie zu aktualisieren, um technologische oder regulatorische Änderungen in den App-Stores widerzuspiegeln. Es wird empfohlen, diese Seite regelmäßig zu überprüfen."
        },
        fr: {
            backBtn: "Retour à l'accueil",
            title: "Politique de Confidentialité & Suppression - MastoLand",
            heading: "Politique de Confidentialité et Suppression de Données",
            metaApp: "<strong>Application:</strong> MastoLand",
            metaDate: "<strong>Dernière mise à jour:</strong> Juin 2026",
            metaAuthor: "<strong>Développeur:</strong> José Rodolfo De La Torre",
            metaContact: "<strong>Contact:</strong> rury76@gmail.com",
            intro: "Chez <strong>MastoLand</strong>, nous prenons la confidentialité de nos utilisateurs très au sérieux. Cette Politique de Confidentialité explique de manière transparente comment les données sont gérées, transmises et supprimées dans notre application mobile (Android) et de bureau (macOS).",
            sec1Title: "1. Nature du Service (Application Tierce)",
            sec1p1: "MastoLand est un client natif open-source pour le réseau social décentralisé et fédéré <strong>Mastodon</strong>. MastoLand <strong>ne dispose pas de ses propres serveurs, bases de données centralisées ou systèmes de stockage cloud gérés par le développeur</strong>.",
            sec1p2: "Toute l'infrastructure du réseau social (enregistrement des utilisateurs, stockage des publications, images, vidéos et modération du contenu) dépend exclusivement de l'instance ou du serveur du Fediverse sur lequel l'utilisateur a décidé de s'inscrire de manière indépendante (par exemple, <em>mastodon.social</em> ou d'autres serveurs publics).",
            sec2Title: "2. Collecte et Utilisation des Données",
            sec2aTitle: "A. Données d'Authentification",
            sec2ap: "Pour accéder au réseau, l'application utilise le protocole sécurisé <strong>OAuth</strong>. L'utilisateur saisit ses identifiants directement sur la passerelle web de son instance respective. MastoLand reçoit et stocke uniquement un jeton d'accès localement et en toute sécurité sur l'appareil pour maintenir la session ouverte. <strong>Les mots de passe ne sont jamais vus, traités ou stockés par le développeur.</strong>",
            sec2bTitle: "B. Contenu Multimédia (Photos et Vidéos)",
            sec2bli1: "<strong>Collecte en transit:</strong> Lorsque l'utilisateur décide de rédiger une nouvelle publication ou de répondre à un fil de discussion et inclut des images ou des vidéos de sa galerie, MastoLand traite ces fichiers dans le seul but de les transmettre via des connexisons sécurisées (HTTPS) à l'API du serveur Mastodon de l'utilisateur.",
            sec2bli2: "<strong>Finalité:</strong> Ces fichiers sont collectés exclusivement pour les <strong>Fonctionnalités de l'application</strong> (permettre à l'utilisateur de partager du contenu multimédia sur sa Timeline). Ils ne sont pas utilisés pour la publicité, les analyses ou la personnalisation des profils.",
            sec3Title: "3. Sécurité des Données",
            sec3p: "Toutes les données transmises par MastoLand vers le Fediverse sont obligatoirement chiffrées en transit à l'aide du protocole de sécurité <strong>HTTPS (TLS)</strong>, empêchant des tiers d'intercepter les informations de l'utilisateur ou ses fichiers multimédias.",
            sec4Title: "4. Politique de Suppression des Données (Data Deletion)",
            sec4p: "Conformément aux directives de sécurité des magasins d'applications Google Play et Apple App Store, nous garantissons que les utilisateurs ont un contrôle absolu sur la suppression de leurs données via deux mécanismes :",
            sec4aTitle: "A. Suppression des Données Locales (Sur l'Appareil)",
            sec4ap: "L'utilisateur peut demander la suppression immédiate de toutes les données stockées localement par l'application (jetons d'accès, caches temporaires et base de données locale Room) en effectuant l'une des actions suivantes :",
            sec4ali1: "Aller dans le menu de configuration de MastoLand et appuyer sur <strong>\"Se Déconnecter\"</strong>.",
            sec4ali2: "Désinstaller l'application de l'appareil ou effacer les données de stockage depuis les Paramètres du Système d'Exploitation (Android/macOS).",
            sec4bTitle: "B. Suppression des Données sur le Réseau (Sur le Serveur ou l'Instance)",
            sec4bp: "Étant donné que les publications, images, vidéos et informations de profil résident sur les serveurs décentralisés de Mastodon et non sous le contrôle direct de MastoLand :",
            sec4bli1: "L'utilisateur peut supprimer des publications individuelles directement depuis l'interface de l'application, ce qui déclenchera immédiatement l'ordre de suppression vers l'API du serveur fédéré.",
            sec4bli2: "Pour une suppression définitive du compte et de tout l'historique multimédia associé dans le Fediverse, l'utilisateur doit accéder en externe au panneau web de l'instance Mastodon où il s'est initialement inscrit et demander la résiliation définitive depuis ses paramètres de profil.",
            sec5Title: "5. Modifications de cette Politique",
            sec5p: "Nous nous réservons le droit de mettre à jour cette politique pour refléter les changements technologiques ou réglementaires dans les magasins d'applications. Il est recommandé de consulter régulièrement cette page."
        },
        ja: {
            backBtn: "ホームに戻る",
            title: "プライバシーポリシーとデータ削除 - MastoLand",
            heading: "プライバシーポリシーとデータ削除について",
            metaApp: "<strong>アプリ:</strong> MastoLand",
            metaDate: "<strong>最終更新日:</strong> 2026年6月",
            metaAuthor: "<strong>開発者:</strong> José Rodolfo De La Torre",
            metaContact: "<strong>連絡先:</strong> rury76@gmail.com",
            intro: "<strong>MastoLand</strong>では、ユーザーのプライバシーを最優先に考えています。このプライバシーポリシーは、モバイル（Android）およびデスクトップ（macOS）アプリにおけるデータの取り扱い、送信、および削除方法を透明性を持って説明するものです。",
            sec1Title: "1. サービスの性質（サードパーティ製アプリ）",
            sec1p1: "MastoLandは、分散型ソーシャルネットワーク<strong>Mastodon</strong>のオープンソースのネイティブクライアントです。MastoLandは、<strong>開発者が管理する独自のサーバー、中央データベース、またはクラウドストレージシステムを一切持っていません</strong>。",
            sec1p2: "ユーザー登録、投稿、画像、動画の保存、コンテンツのモデレーションなど、ソーシャルネットワークのすべてのインフラは、ユーザーが独自に登録したフェディバースのインスタンス（サーバー）のみに依存します（例: <em>mastodon.social</em>など）。",
            sec2Title: "2. データの収集と利用目的",
            sec2aTitle: "A. 認証データについて",
            sec2ap: "ネットワークにアクセスするため、アプリはセキュアな<strong>OAuth</strong>プロトコルを使用します。ユーザーは、それぞれのインスタンスのウェブゲートウェイに直接資格情報を入力します。MastoLandは、セッションを維持するために、デバイスのローカルにアクセストークンのみを安全に保存します。<strong>パスワードが開発者に送信、処理、または保存されることは決してありません。</strong>",
            sec2bTitle: "B. マルチメディアコンテンツ（写真と動画）",
            sec2bli1: "<strong>転送時の収集:</strong> ユーザーが新しい投稿を作成するか、スレッドに返信し、ギャラリーから画像や動画を選択した際、MastoLandはユーザーのMastodonサーバーAPIに安全な接続（HTTPS）を介して転送する目的でのみこれらのファイルを処理します。",
            sec2bli2: "<strong>目的:</strong> これらのファイルは、純粋に<strong>アプリの機能</strong>（タイムラインにメディアを共有する機能）のためにのみ一時的に処理されます。広告、分析、またはプロフィールカスタマイズに使用されることはありません。",
            sec3Title: "3. データの安全管理",
            sec3p: "MastoLandからフェディバースに送信されるすべてのデータは、<strong>HTTPS (TLS)</strong>プロトコルによって暗号化され、第三者による傍受を防いでいます。",
            sec4Title: "4. データ削除ポリシー (Data Deletion)",
            sec4p: "Google PlayおよびApple App Storeのセキュリティガイドラインに準拠し、ユーザーが以下の2つの方法でデータを完全に削除できることを保証します。",
            sec4aTitle: "A. ローカルデータ（デバイス内）の削除",
            sec4ap: "ユーザーは、以下のいずれかの操作を実行することで、アプリによってローカルに保存されたすべてのデータ（アクセストークン、一時キャッシュ、Roomデータベース）を直ちに削除できます。",
            sec4ali1: "MastoLandの設定メニューに移動し、<strong>「ログアウト」</strong>をタップする。",
            sec4ali2: "デバイスからアプリをアンインストールするか、OS設定のアプリ情報からストレージデータをクリアする。",
            sec4bTitle: "B. ネットワーク（サーバー上）のデータ削除",
            sec4bp: "投稿、画像、動画、およびプロフィール情報は分散型Mastodonサーバー上にあり、MastoLandの直接管理下にないため、以下のようになります。",
            sec4bli1: "ユーザーはアプリインターフェースから個々の投稿を直接削除できます。これにより、サーバーAPIに削除コマンドが直ちに送信されます。",
            sec4bli2: "フェディバースにおけるアカウントおよび関連するすべてのメディア履歴を永久に削除するには、ユーザーが登録したMastodonインスタンスのウェブパネルに外部からアクセスし、プロフィールの設定から退会手続きを行う必要があります。",
            sec5Title: "5. 本ポリシーの変更について",
            sec5p: "アプリストアの技術的または法的な変更に対応するため、本ポリシーを予告なく更新する権利を留保します。定期的に本ページを確認することをお勧めします。"
        },
        pt: {
            backBtn: "Voltar ao início",
            title: "Política de Privacidade & Eliminação - MastoLand",
            heading: "Política de Privacidade e Eliminação de Dados",
            metaApp: "<strong>Aplicativo:</strong> MastoLand",
            metaDate: "<strong>Última atualização:</strong> Junho de 2026",
            metaAuthor: "<strong>Desenvolvedor:</strong> José Rodolfo De La Torre",
            metaContact: "<strong>Contato:</strong> rury76@gmail.com",
            intro: "No <strong>MastoLand</strong>, levamos a sério a privacidade dos nossos usuários. Esta Política de Privacidade explica de forma transparente como os dados são tratados, transmitidos e excluídos em nosso aplicativo móvel (Android) e desktop (macOS).",
            sec1Title: "1. Natureza do Serviço (Aplicativo de Terceiros)",
            sec1p1: "MastoLand é um cliente nativo de código aberto para a rede social descentralizada e federada <strong>Mastodon</strong>. O MastoLand <strong>não possui servidores próprios, bancos de dados centralizados ou sistemas de armazenamento em nuvem gerenciados pelo desenvolvedor</strong>.",
            sec1p2: "Toda a infraestrutura da rede social (registro de usuários, armazenamento de publicações, imagens, vídeos e moderação de conteúdo) depende exclusivamente da instância ou servidor do Fediverso no qual o usuário decidiu se registrar de forma independente (por exemplo, <em>mastodon.social</em> ou outros servidores públicos).",
            sec2Title: "2. Coleta e Uso de Dados",
            sec2aTitle: "A. Dados de Autenticação",
            sec2ap: "Para acessar a rede, o aplicativo usa o protocolo seguro <strong>OAuth</strong>. O usuário insere suas credenciais diretamente no gateway da web de sua respectiva instância. O MastoLand apenas recebe e armazena com segurança um token de acesso localmente no dispositivo para manter a sessão aberta. <strong>As senhas nunca são vistas, processadas ou armazenadas pelo desenvolvedor.</strong>",
            sec2bTitle: "B. Conteúdo Multimídia (Fotos e Vídeos)",
            sec2bli1: "<strong>Coleta em trânsito:</strong> Quando o usuário decide redigir uma nova publicação ou responder a um tópico e inclui imagens ou vídeos de sua galeria, o MastoLand processa esses arquivos com o único propósito de transmiti-los por conexões seguras (HTTPS) para a API do servidor Mastodon do usuário.",
            sec2bli2: "<strong>Finalidade:</strong> Esses arquivos são coletados exclusivamente para a <strong>Funcionalidade do app</strong> (permitir ao usuário compartilhar conteúdo multimídia em sua Linha do Tempo). Eles não são usados para publicidade, análise ou personalização de perfis.",
            sec3Title: "3. Segurança dos Dados",
            sec3p: "Todos os dados transmitidos pelo MastoLand para o Fediverso são obrigatoriamente criptografados em trânsito usando o protocolo de segurança <strong>HTTPS (TLS)</strong>, impedindo que terceiros interceptem as informações do usuário ou arquivos multimídia.",
            sec4Title: "4. Política de Exclusão de Dados (Data Deletion)",
            sec4p: "Em conformidade com as diretrizes de segurança das lojas de aplicativos Google Play e Apple App Store, garantimos que os usuários tenham controle absoluto sobre a exclusão de seus dados por meio de dois mecanismos:",
            sec4aTitle: "A. Exclusão de Dados Locais (No Dispositivo)",
            sec4ap: "O usuário pode solicitar a exclusão imediata de todos os dados armazenados localmente pelo aplicativo (tokens de acesso, caches temporários e banco de dados Room local) realizando qualquer uma das seguintes ações:",
            sec4ali1: "Ir ao menu de configurações dentro do MastoLand e tocar em <strong>\"Sair da Conta\"</strong>.",
            sec4ali2: "Desinstalar o aplicativo do dispositivo ou apagar os dados de armazenamento nas Configurações do Sistema Operacional (Android/macOS).",
            sec4bTitle: "B. Exclusão de Dados na Rede (No Servidor ou Instância)",
            sec4bp: "Como postagens, imagens, vídeos e informações de perfil residem nos servidores descentralizados do Mastodon e não sob o controle direto do MastoLand:",
            sec4bli1: "O usuário pode excluir publicações individuais diretamente da interface do aplicativo, o que acionará imediatamente o comando de exclusão para a API do servidor federado.",
            sec4bli2: "Para uma exclusão permanente da conta e de todo o histórico multimídia associado no Fediverso, o usuário deve acessar externamente o painel web da instância do Mastodon onde se registrou originalmente e solicitar o encerramento permanente em suas configurações de perfil.",
            sec5Title: "5. Alterações a esta Política",
            sec5p: "Reservamo-nos o direito de atualizar esta política para refletir mudanças tecnológicas ou regulatórias nas lojas de aplicativos. Recomenda-se revisar esta página periodicamente."
        }
    };

    const translatePage = (lang) => {
        const dict = translations[lang] || translations.en;

        // Head Meta
        document.title = dict.title;
        document.documentElement.lang = lang;

        // Elements Mapping
        const elementsMapping = {
            'back-home-btn-text': dict.backBtn,
            'title-heading': dict.heading,
            'meta-app': dict.metaApp,
            'meta-date': dict.metaDate,
            'meta-author': dict.metaAuthor,
            'meta-contact': dict.metaContact,
            'intro-p': dict.intro,
            'sec-1-title': dict.sec1Title,
            'sec-1-p1': dict.sec1p1,
            'sec-1-p2': dict.sec1p2,
            'sec-2-title': dict.sec2Title,
            'sec-2a-title': dict.sec2aTitle,
            'sec-2a-p': dict.sec2ap,
            'sec-2b-title': dict.sec2bTitle,
            'sec-2b-li1': dict.sec2bli1,
            'sec-2b-li2': dict.sec2bli2,
            'sec-3-title': dict.sec3Title,
            'sec-3-p': dict.sec3p,
            'sec-4-title': dict.sec4Title,
            'sec-4-intro-p': dict.sec4p,
            'sec-4a-title': dict.sec4aTitle,
            'sec-4a-p': dict.sec4ap,
            'sec-4a-li1': dict.sec4ali1,
            'sec-4a-li2': dict.sec4ali2,
            'sec-4b-title': dict.sec4bTitle,
            'sec-4b-p': dict.sec4bp,
            'sec-4b-li1': dict.sec4bli1,
            'sec-4b-li2': dict.sec4bli2,
            'sec-5-title': dict.sec5Title,
            'sec-5-p': dict.sec5p
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

        // Update current lang text
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

    // Toggle lang dropdown
    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('show');
        });
    }

    // Dropdown options click
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', (e) => {
            const lang = e.target.getAttribute('data-lang');
            setLanguage(lang);
            langDropdown.classList.remove('show');
        });
    });

    // Close dropdown on outside click
    document.addEventListener('click', () => {
        if (langDropdown && langDropdown.classList.contains('show')) {
            langDropdown.classList.remove('show');
        }
    });

    // Run Initializer
    initLanguage();
});
