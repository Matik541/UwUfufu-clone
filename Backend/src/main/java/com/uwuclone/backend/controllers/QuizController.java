package com.uwuclone.backend.controllers;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/quiz")
@Slf4j
public class QuizController {

    @GetMapping()
    public ResponseEntity<?> getQuiz() {
        return ResponseEntity.ok("quizzes");
    }
}
