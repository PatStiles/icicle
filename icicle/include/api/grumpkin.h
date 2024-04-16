// WARNING: This file is auto-generated by a script.
// Any changes made to this file may be overwritten.
// Please modify the code generation script instead.
// Path to the code generation script: scripts/gen_c_api.py

#pragma once
#ifndef GRUMPKIN_API_H
#define GRUMPKIN_API_H

#include <cuda_runtime.h>
#include "gpu-utils/device_context.cuh"
#include "curves/params/grumpkin.cuh"
#include "msm/msm.cuh"
#include "vec_ops/vec_ops.cuh"
#include "poseidon/poseidon.cuh"
#include "poseidon/tree/merkle.cuh"

extern "C" cudaError_t grumpkinPrecomputeMSMBases(
  grumpkin::affine_t* bases,
  int bases_size,
  int precompute_factor,
  int _c,
  bool are_bases_on_device,
  device_context::DeviceContext& ctx,
  grumpkin::affine_t* output_bases);

extern "C" cudaError_t grumpkinMSMCuda(
  const grumpkin::scalar_t* scalars, const grumpkin::affine_t* points, int msm_size, msm::MSMConfig& config, grumpkin::projective_t* out);

extern "C" bool grumpkinEq(grumpkin::projective_t* point1, grumpkin::projective_t* point2);

extern "C" void grumpkinToAffine(grumpkin::projective_t* point, grumpkin::affine_t* point_out);

extern "C" void grumpkinGenerateProjectivePoints(grumpkin::projective_t* points, int size);

extern "C" void grumpkinGenerateAffinePoints(grumpkin::affine_t* points, int size);

extern "C" cudaError_t grumpkinAffineConvertMontgomery(
  grumpkin::affine_t* d_inout, size_t n, bool is_into, device_context::DeviceContext& ctx);

extern "C" cudaError_t grumpkinProjectiveConvertMontgomery(
  grumpkin::projective_t* d_inout, size_t n, bool is_into, device_context::DeviceContext& ctx);

extern "C" cudaError_t grumpkinPoseidonHash(
  grumpkin::scalar_t* input,
  grumpkin::scalar_t* output,
  int number_of_states,
  int arity,
  const poseidon::PoseidonConstants<grumpkin::scalar_t>& constants,
  poseidon::PoseidonConfig& config);

extern "C" cudaError_t grumpkinBuildPoseidonMerkleTree(
  const grumpkin::scalar_t* leaves,
  grumpkin::scalar_t* digests,
  uint32_t height,
  int arity,
  poseidon::PoseidonConstants<grumpkin::scalar_t>& constants,
  merkle::TreeBuilderConfig& config);

extern "C" cudaError_t grumpkinMulCuda(
  grumpkin::scalar_t* vec_a, grumpkin::scalar_t* vec_b, int n, vec_ops::VecOpsConfig<grumpkin::scalar_t>& config, grumpkin::scalar_t* result);

extern "C" cudaError_t grumpkinAddCuda(
  grumpkin::scalar_t* vec_a, grumpkin::scalar_t* vec_b, int n, vec_ops::VecOpsConfig<grumpkin::scalar_t>& config, grumpkin::scalar_t* result);

extern "C" cudaError_t grumpkinSubCuda(
  grumpkin::scalar_t* vec_a, grumpkin::scalar_t* vec_b, int n, vec_ops::VecOpsConfig<grumpkin::scalar_t>& config, grumpkin::scalar_t* result);

extern "C" cudaError_t grumpkinTransposeMatrix(
  const grumpkin::scalar_t* input,
  uint32_t row_size,
  uint32_t column_size,
  grumpkin::scalar_t* output,
  device_context::DeviceContext& ctx,
  bool on_device,
  bool is_async);

extern "C" void grumpkinGenerateScalars(grumpkin::scalar_t* scalars, int size);

extern "C" cudaError_t grumpkinScalarConvertMontgomery(
  grumpkin::scalar_t* d_inout, size_t n, bool is_into, device_context::DeviceContext& ctx);

#endif