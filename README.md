# Konimbo Project

Full-stack web application with **React front-end** and **Java Spring Boot back-end**.  
The application fetches data from Airtable via API and displays it in a responsive interface.  

## Project Structure

- **Backend (Java Spring Boot)**
  - REST controllers for API endpoints  
  - Services for business logic  
  - Beans mapped to Airtable JSON structure  
  - Uses `RestTemplate` for Airtable integration  

- **Frontend (React)**
  - React framework with SPA routing via `react-router-dom`  
  - State management with `useState` and `useEffect`  
  - Axios for API calls  
  - CSS for styling  
  - React icons  
  - Toastify for notifications  
  - Fully responsive  

- **Media Files**
  - 3 `.mp4` files are **excluded from the repository** due to size  
  - Will be delivered via **Google Drive**  

- **Docker**
  - Full-stack application image available:  
    ```bash
    docker pull ghcr.io/bennybach169/konimo_app:latest
    ```

---

## Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/BennyBach169/konimbo_project.git

# 2. Frontend Setup
cd konimbo_front/konimbo_form
npm install
# or
yarn install
npm start
# Open your browser at http://localhost:5173

# ⚠️ Note: The .mp4 video files are missing from the repository and should be added to the assets folder from Google Drive.

# 3. Backend Setup
cd ../../konimbo_back/Konimbo-Task
mvn clean package
mvn spring-boot:run
# The API will run on http://localhost:8080

# 4. Run with Docker (optional)
docker pull ghcr.io/bennybach169/konimo_app:latest
docker run -p 8080:8080 ghcr.io/bennybach169/konimo_app:latest
# Open in your browser at http://localhost:8080
