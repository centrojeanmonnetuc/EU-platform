import * as yup from "yup";
import {
  getRequiredFileSchema,
  getOptionalFileSchema,
} from "../../../Form/data.schemas";

import {
  questionsRequiredMsg,
  answerRequiredMsg,
  wordSearchWordRequiredMsg,
  wordSearchWordsRequiredMsg,
  colorRequiredMsg,
  colorsRequiredMsg,
} from "./errorMessages";

let createNew;
export const setCreateNew = (value) => (createNew = value);

export const schemaPuzzle = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  thumbnail: createNew ? getRequiredFileSchema() : getOptionalFileSchema(),
  config: yup.object().shape({
    pieces_size: yup.number().required(),
    background_puzzle_image: yup.boolean(),
    piece_position_helper: yup.boolean(),
    move_pieces_freely: yup.boolean(),
    time: yup.boolean(),
    time_to_complete: yup.number().when("time", {
      is: true,
      then: yup
        .number()
        .nullable(true)
        .transform((_, val) => (val === val ? val : null))
        .when("time", {
          is: true,
          then: yup
            .number()
            .min(0)
            .max(3 * 60) // 3 min
            .required(
              "O tempo deve ser superior a 0 segundos e inferior a 200 segundos"
            ),
        }),
    }),
  }),
  assets: yup.object().shape({
    puzzle_image: createNew ? getRequiredFileSchema() : getOptionalFileSchema(),
  }),
});

export const schemaColorGame = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  thumbnail: createNew ? getRequiredFileSchema() : getOptionalFileSchema(),
  config: yup.object().shape({
    colors: yup
      .array()
      .of(
        yup.object().shape({
          code: yup.string().required(colorRequiredMsg),
        })
      )
      .min(7, colorsRequiredMsg)
      .required(),
    sensibility: yup.number().required(),
  }),
  assets: yup.object().shape({
    blank_img: createNew ? getRequiredFileSchema() : getOptionalFileSchema(),
    colored_img: createNew ? getRequiredFileSchema() : getOptionalFileSchema(),
  }),
});

export const schemaWordSearch = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  thumbnail: createNew ? getRequiredFileSchema() : getOptionalFileSchema(),
  config: yup.object().shape({
    words: yup
      .array()
      .of(
        yup.object().shape({
          word: yup.string().required(wordSearchWordRequiredMsg),
        })
      )
      .min(3, wordSearchWordsRequiredMsg)
      .required(),
    num_horizontal_cells: yup.number().required(),
    num_vertical_cells: yup.number().required(),
    timer: yup.boolean(),
    time_to_complete: yup.number().when("timer", {
      is: true,
      then: yup
        .number()
        .min(0)
        .max(3 * 60) // 3 min
        .required(
          "O tempo deve ser superior a 0 segundos e inferior a 200 segundos"
        ),
    }),
  }),
});

export const schemaQuiz = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  thumbnail: createNew ? getRequiredFileSchema() : getOptionalFileSchema(),
  config: yup.object().shape({
    questions: yup
      .array()
      .of(
        yup.object().shape({
          question: yup.string().required(),
          answers: yup
            .object()
            .shape({
              answer1: yup.string().required(answerRequiredMsg),
              answer2: yup.string().required(answerRequiredMsg),
              answer3: yup.string().required(answerRequiredMsg),
              answer4: yup.string().required(answerRequiredMsg),
            })
            .required(),
          right_answer: yup.number().required(),
          justification: yup.string().required(),
        })
      )
      .min(1, questionsRequiredMsg)
      .required(),
  }),
});

export const schemaMemory = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  thumbnail: createNew ? getRequiredFileSchema() : getOptionalFileSchema(),
  config: yup.object().shape({
    // destroy_card: yup.bool(),
    // max_attempts: yup.number().required(),
    // total_images: yup.number().required(),
    timer: yup.boolean(),
    time_to_complete: yup.number().when("timer", {
      is: true,
      then: yup
        .number()
        .min(0)
        .max(3 * 60) // 3 min
        .required(
          "O tempo deve ser superior a 0 segundos e inferior a 200 segundos"
        ),
    }),
  }),
  assets: yup.object().shape({
    front_cards: yup.array().required(),
  }),
});

export const schemaInteractiveMaps = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  thumbnail: createNew ? getRequiredFileSchema() : getOptionalFileSchema(),
  config: yup.object().shape({
    questions: yup
      .array()
      .of(
        yup.object().shape({
          question: yup.string().required(),
          right_answer: yup.number().required(),
          justification: yup.string().required(),
        })
      )
      .min(1, questionsRequiredMsg)
      .required(),
  }),
});

export const schemaCrossWords = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  thumbnail: createNew ? getRequiredFileSchema() : getOptionalFileSchema(),
  config: yup.object().shape({
    crossword_data: yup.object().shape({
      across: yup
        .array()
        .of(
          yup.object().shape({
            num: yup.number().min(0, "deve ser um número positivo").required(),
            clue: yup.string().required(),
            answer: yup.string().required(),
            row: yup.number().min(0).required(),
            col: yup.number().min(0).required(),
          })
        )
        .min(1, questionsRequiredMsg)
        .required(),
      down: yup
        .array()
        .of(
          yup.object().shape({
            num: yup.number().min(0, "deve ser um número positivo").required(),
            clue: yup.string().required(),
            answer: yup.string().required(),
            row: yup.number().min(0).required(),
            col: yup.number().min(0).required(),
          })
        )
        .min(1, questionsRequiredMsg)
        .required(),
    }),
  }),
});
