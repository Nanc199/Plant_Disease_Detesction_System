@echo off
echo ========================================
echo  Plant Disease Detection - Backend
echo ========================================
echo.
echo Starting Flask API server...
echo.

cd backend

if exist venv311 (
    set "VENV_DIR=venv311"
) else (
    set "VENV_DIR=venv"
)

if not exist "%VENV_DIR%" (
    echo Creating virtual environment...
    python -m venv "%VENV_DIR%"
    echo.
)

echo Activating virtual environment...
call "%VENV_DIR%\Scripts\activate"

echo.
echo Installing/Updating dependencies...
pip install -r requirements.txt

echo.
echo ========================================
echo  Starting Flask Server on Port 5050
echo ========================================
echo.

set PORT=5050
python app.py

pause
