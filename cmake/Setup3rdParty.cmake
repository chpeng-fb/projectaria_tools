# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

include(FetchContent) # once in the project to include the module

FetchContent_Declare(
  Dispenso
  GIT_REPOSITORY      https://github.com/facebookincubator/dispenso.git
  GIT_TAG             9360e1e214a4a295e44174d7703676a94d9ebfce # v1.1.0
)

FetchContent_Declare(
  vrs
  GIT_REPOSITORY  https://github.com/facebookresearch/vrs.git
  GIT_TAG        e8ef307247d4c4ee7f736672b7419f6fd5340396 # master Aug 4, 2023. V 1.1.0
)
# Override config for vrs
option(UNIT_TESTS OFF)
option(BUILD_SAMPLES OFF)
option(BUILD_TOOLS OFF)

message("Pulling deps: {vrs}")
FetchContent_MakeAvailable(vrs)

FetchContent_Declare(
  eigen
  GIT_REPOSITORY      https://gitlab.com/libeigen/eigen.git
  GIT_TAG          19cacd3ecb9dab73c2dd7bc39d9193e06ba92bdd # 3.4.90
)
FetchContent_Declare(
  Sophus
  GIT_REPOSITORY      https://github.com/strasdat/Sophus.git
  GIT_TAG          de0f8d3d92bf776271e16de56d1803940ebccab9 # 1.22.10
)

# Override config for Sophus
option(BUILD_SOPHUS_TESTS OFF)
option(BUILD_SOPHUS_EXAMPLES OFF)
add_definitions("-DSOPHUS_DISABLE_ENSURES")

FetchContent_Declare(
  cli11
  GIT_REPOSITORY https://github.com/CLIUtils/CLI11
  GIT_TAG        v2.3.2
)

set(dependencies cli11 eigen Sophus Dispenso)
foreach(X IN LISTS dependencies)
  message("Pulling deps: {${X}}")
  FetchContent_MakeAvailable(${X})
endforeach()

include(ExternalProject)
ExternalProject_Add(
  fast-cpp-csv-parser
  GIT_REPOSITORY https://github.com/ben-strasser/fast-cpp-csv-parser.git
  GIT_TAG        origin/master
  SOURCE_DIR     "${CMAKE_BINARY_DIR}/_deps/fast-cpp-csv-parser"
  # disable following, since it is not needed
  CONFIGURE_COMMAND ""
  BUILD_COMMAND ""
  INSTALL_DIR ""
  INSTALL_COMMAND ""
)
